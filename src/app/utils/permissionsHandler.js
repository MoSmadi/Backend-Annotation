import { set, get, del } from '@core/redis'
import { redis } from '@config'

export const SUPER_ADMIN = 'super_admin'
export const SUPER_ADMIN_ROLE = 'Super Admin'
export const simplifyPermissionsObject = user => {
    let permissions_granted = {}
    if(!user.roles) {
        return permissions_granted
    }
    for (const role of user.roles) {
        for (const permission of role.permissions) {
            permissions_granted[permission.name] = []
            for (const route of permission.actions) {
                permissions_granted[permission.name].push(route)
            }
        }
    }
    return permissions_granted
}
// this key should be unique across all users
export const userPermissionsKey = user => {
    return `${user.email.toString()}_permissions`
}
export const flushPermissions = async user => {
    if(user.type === 'Admin') {
        await del(userPermissionsKey(user))
    }
}
export const userPermissions = async user => {
    let permissions_string = await get(userPermissionsKey(user))
    if (!permissions_string) {
        // Cache miss
        const populated_user = await user.populateRoles()
        const permissions = simplifyPermissionsObject(populated_user)
        permissions_string = JSON.stringify(permissions)
        await set(userPermissionsKey(user), permissions_string, 'EX', redis.ttl_key)
    }
    return JSON.parse(permissions_string)
}
export const getPermission = async (user, req) => {
    const user_permissions = await userPermissions(user)
    if(user_permissions[SUPER_ADMIN]) {
        return SUPER_ADMIN
    }
    for (const permission of Object.keys(user_permissions)) {
        if (anyMatch(user_permissions[permission], req)) {
            return permission
        }
    }
    return null
}
export const routesMatch = (req, path_to_match_with_verb) => {
    let [method, path_to_match] = path_to_match_with_verb.split('#')
    if(method !== req?.method) {
        return false
    }
    let request_path = req.originalUrl.split('?').shift().toLowerCase()
    request_path = request_path.split('/').filter(n => n)
    path_to_match = path_to_match.split('/').filter(n => n)
    if (request_path.length !== path_to_match.length) return false
    for (let i = 0; i < request_path.length; i++) {
        if (path_to_match[i] !== '$' && request_path[i] !== path_to_match[i]) return false
    }
    return true
}
export const anyMatch = (authorized_routes, req) => {
    for (const route_to_match_with_verb of authorized_routes) {
        if (routesMatch(req, route_to_match_with_verb)) {
            return true
        }
    }
    return false
}