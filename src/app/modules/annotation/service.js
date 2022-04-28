import { Annotation } from '@db/models'


export const addNewAnnotation = async data => {
    console.log(data)
    return Annotation.create(data);
}

export const getAnnotation = async(URL) => {
    console.log(URL);
    return await Annotation.find({pageURL: URL})
}
