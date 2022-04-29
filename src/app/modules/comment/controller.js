import * as commentServices from './service'

export const addComment = async(req, res) => {
    const new_comment = await commentServices.addComment(req.body)
    res.send(new_comment)
}

export const getComment = async(req, res) => {
    res.send(await commentServices.getComment( req.params.userId, req.params.annotateId ))
}

