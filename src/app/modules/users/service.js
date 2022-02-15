import { User } from '@db/models'

export const findUserByName = async(name) => {
    const user = await User.findOne({ first_name: name })
    return user
}

export const getAllUsers = async() => {
    const users = await User.find()

    return users
}

export const createUser = async data => {
    return await User.create(data)
}