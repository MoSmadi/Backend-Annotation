import * as annotationServices from './service'

export const addNewAnnotation = async(req, res) =>
{
    const newAnnotation = await annotationServices.addNewAnnotation(req.body)
    res.send(newAnnotation)
}

export const getAnnotation = async(req, res) => {
    res.send(await annotationServices.getAnnotation( req.params.pageUrl ))
}



