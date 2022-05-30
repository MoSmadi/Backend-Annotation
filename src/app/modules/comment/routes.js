import {
    getComment,
    addComment
} from "./controller"
import { router } from '@core/router'

const route = router()

route.post('/:userId/:annotateId', addComment)
route.get('/:annotateId', getComment)

export default route