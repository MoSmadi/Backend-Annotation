import { server as server_config } from '@config'
import jwt from 'jsonwebtoken'

export const generateToken = (payload, options = {}) => {
    if (!options.expiresIn) {
        options.expiresIn = server_config.authToken.expiresIn
    }
    return jwt.sign(Object.assign({ ...payload }), server_config.hash, options)
}

export const validateToken = (token, verify_option={}) => {
    try {
        return jwt.verify(token, server_config.hash, verify_option)
    } catch(e){
        throw {message: e.message, type:"unauthorized"}
    }
}

export const refreshToken = (token, options = {}) => {
    let payload = validateToken(token, {ignoreExpiration: true})
    return generateToken( { _id: payload._id }, options)
}