import { body, validate } from '@core/validator'
import { confirmPasswordReset } from '../service'
import { checkIfPasswordValid } from '@app/utils/passwordValidation'


const rules = [
    body('password')
        .exists().withMessage('The password field is required')
        .isLength({ min: 1 }).withMessage('the password field must have at least one character')
        .custom(checkIfPasswordValid),

    body('confirmPassword')
        .exists().withMessage('The confirmPassword field is required')
        .isLength({ min: 1 }).withMessage('the confirmPassword field must have at least one character')
        .custom(confirmPasswordReset)

]

export default validate(rules)
