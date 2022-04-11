import { Annotation } from '@db/models'


export const addNewAnnotation = async data => {
    return Annotation.create(data);
}

export const getAnnotation = async(URL) => {
    console.log(URL);
    return await Annotation.find({urlPage: URL})
}
