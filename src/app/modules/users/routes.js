import {
    findUserByName,
    getAllUsers,
    createUser
} from "./controller"
import { router } from '@core/router'

const route = router()

route.post('/', createUser)
route.get('/', getAllUsers)
route.get('/:name', findUserByName)

export default route