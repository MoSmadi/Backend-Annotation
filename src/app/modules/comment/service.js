import { Comment } from '@db/models'


export const addComment = async data => {
    return Comment.create(data);
}
//
// export const findUserByName = async(name) => {
//     const user = await User.findOne({ first_name: name })
//     return user
// }
//
// export const getAllUsers = async() => {
//     const users = await User.find()
//
//     return users
// }
