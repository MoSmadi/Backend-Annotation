import { body, validate } from '@core/validator'
import { validateUserByEmail } from '../service'

const rules = [
    body('user.email')
        .exists().withMessage('The email field is required')
        .isEmail().withMessage('The email must be in a valid format')
        .custom(validateUserByEmail)
]

export default validate(rules)
