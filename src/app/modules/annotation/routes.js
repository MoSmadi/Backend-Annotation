import {
    addNewAnnotation,
    getAnnotation
} from "./controller"
import { router } from '@core/router'

const route = router()

route.post('/', addNewAnnotation)
route.get('/:pageUrl', getAnnotation)

export default route