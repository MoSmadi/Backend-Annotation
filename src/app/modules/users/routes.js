import {
    getAllUsers,
    createUser,
    signIn
} from "./controller"
import { router } from '@core/router'

const route = router()

route.post('/', createUser)

route.get('/', getAllUsers)

route.get('/:email/:password', signIn)

export default route