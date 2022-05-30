import { Comment } from '@db/models'


export const addComment = async data =>
{
    //console.log("pass" + data)
    return Comment.create(data);
}

export const getComment = async(annotateId) => {
    return await Comment.find({annotateId: annotateId})
}