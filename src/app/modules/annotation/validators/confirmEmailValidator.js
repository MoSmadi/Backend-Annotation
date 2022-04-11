import { body, validate } from '@core/validator'
import { validateUserByEmail } from '../service'

const rules = [
    body('user.email')
        .exists().withMessage('The email field is required')
        .isEmail().withMessage('The email must be in a valid format')
        .custom(validateUserByEmail),
    body('user.token')
        .exists().withMessage('The token field is required')

]

export default validate(rules)
