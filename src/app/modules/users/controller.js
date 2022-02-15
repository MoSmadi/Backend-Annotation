import * as userServices from './service'
import ErrorWrapper from '@app/utils/errorWrapper'

export const getAllUsers = async(req, res) => {
    res.send(await userServices.getAllUsers())
}

export const findUserByName = async(req, res) => {
    const user = await userServices.findUserByName("asd")
    res.send(user)
}

export const createUser = async(req, res) => {
    const new_user = await userServices.createUser(req.body)
    res.send(new_user)
}