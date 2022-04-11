import {
    // findUserByName,
    // getAllUsers,
    addComment
} from "./controller"
import { router } from '@core/router'

const route = router()

route.post('/', addComment)

// route.get('/', getAllUsers)
// route.get('/:name', findUserByName)

export default route