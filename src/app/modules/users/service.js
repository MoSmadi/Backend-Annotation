import {User} from '@db/models'
import {CONFLICT} from "@app/utils/httpConstants";


export const createUser = async data => // creat new user
{
    const userExists = await findUserByAttr("email", data.email) || await findUserByAttr("phone_number", data.phone_number)

    if (userExists) {
        throw CONFLICT
    }
    return User.create(data);
}

export const findUserByAttr = async(attr, email) => //check if the email or phone number is exists
{
    return await User.findOne({[attr]: email})
}

export const matchPassword = async(email,password) => //check if the email is exists
{
    const userEmail =  await User.findOne({email: email})

    if(userEmail.password === password)
    {
        return true;
    }

}

export const getAllUsers = async() => { // get all users in the database
    return await User.find()
}

export const getUser = async(id) => //return user
{
    return await User.findOne({_id: id})
}


