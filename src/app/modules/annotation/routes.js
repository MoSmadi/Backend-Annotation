import {
    addNewAnnotation,
    getAnnotation
} from "./controller"
import { router } from '@core/router'

const route = router()

route.post('/', addNewAnnotation)
route.get('/:pageURL', getAnnotation)

export default route