import * as annotationServices from './service'

export const addNewAnnotation = async(req, res) =>
{
    console.log(req.body)
    const newAnnotation = await annotationServices.addNewAnnotation(req.body)
    res.send(newAnnotation)
}

export const getAnnotation = async(req, res) => {
    res.send(await annotationServices.getAnnotation( req.params.pageURL ))
}


export const getAllAnnotation = async(req, res) => {
    res.send(await annotationServices.getAllAnnotation())

}