import * as commentServices from './service'

export const addComment = async(req, res) =>
{
    console.log("i am in add comment")
    res.send(await commentServices.addComment(req.body))
}

export const getComment = async(req, res) => {
    res.send(await commentServices.getComment( req.params.userId, req.params.annotateId ))
}

