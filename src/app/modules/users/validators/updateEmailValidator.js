import { body, validate } from '@core/validator'
import { validateEmailExits } from '@app/modules/users/service'

const rules = [
    body('user.current_email')
        .exists().withMessage('This field is required'),
    body('user.new_email')
        .exists().withMessage('This field is required')
        .custom(validateEmailExits)
]
export default validate(rules)
