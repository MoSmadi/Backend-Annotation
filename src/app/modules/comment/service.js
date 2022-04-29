import { Comment } from '@db/models'


export const addComment = async data => {
    return Comment.create(data);
}

export const getComment = async(userId,annotateId) => {
    console.log("userId : " + userId)
    console.log("annotateId : " + annotateId)

    return await Comment.find({userId: userId,annotateId: annotateId})
}