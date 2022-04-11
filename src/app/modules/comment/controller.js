import * as commentServices from './service'

export const addComment = async(req, res) => {
    const new_comment = await commentServices.addComment(req.body)
    res.send(new_comment)
}

// export const getAllUsers = async(req, res) => {
//     res.send(await commentServices.getAllUsers())
// }
//
// export const findUserByName = async(req, res) => {
//     const user = await commentServices.findUserByName("asd")
//     res.send(user)
// }


