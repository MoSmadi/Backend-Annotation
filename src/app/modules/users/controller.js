import * as userServices from './service'
import {CONFLICT, UNAUTHORIZED} from "@app/utils/httpConstants";
import ErrorWrapper from '@app/utils/errorWrapper'


export const createUser = async(req, res) =>
{
    try
    {
        const new_user = await userServices.createUser(req.body)
        res.send(new_user)
    }
    catch (e)
    {
        if (e === CONFLICT)
        {
            return new ErrorWrapper("user already exists").conflict(res)
        }
        return new ErrorWrapper("user already exists").internalServerError(res)
    }
}

export const signIn = async(req, res) => {
    try {
        const userExists = await userServices.findUserByAttr("email", req.params.email)

        if (userExists) {
            // console.log("email is exists")
            // try
            // {
                const passwordIsCorrect = await userServices.matchPassword(req.params.email, req.params.password)

                if (passwordIsCorrect){
                    // console.log("email and password is true")
                    res.send(userExists)
                }
                else {
                    console.log("password is false")
                    res.send(401)
                    throw UNAUTHORIZED
                }
        }
        else {
            console.log("email is not exists 2")
            throw CONFLICT
        }
    }
    catch (e) {
        if (e === CONFLICT) {
            return new ErrorWrapper("user not exists").conflict(res)
        }
        if(e === UNAUTHORIZED) {
            console.log("unauthorized ")
            return new ErrorWrapper("Hello guys").conflict(res)
        }

        return new ErrorWrapper("user not exists").internalServerError(res)
    }
}

export const getAllUsers = async(req, res) => {
    res.send(await userServices.getAllUsers())
}

export const findUserByEmail = async(req, res) =>
{
    const user = await userServices.findUserByEmail(req.params.email)
    res.send(user)
    console.log(user)
}
