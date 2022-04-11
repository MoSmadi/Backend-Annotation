import { body, validate } from '@core/validator'
import { checkIfPasswordCorrect, checkIfConfirmEqualNewPassword } from '../service'
import { checkIfPasswordValid } from '@app/utils/passwordValidation'

const rules = [
    body('user.current_password')
        .exists().withMessage('This field is required')
        .custom(checkIfPasswordCorrect),
    body('user.new_password')
        .exists().withMessage('This field is required')
        .custom(checkIfPasswordValid),
    body('user.confirm_password')
        .exists().withMessage('This field is required')
        .custom(checkIfConfirmEqualNewPassword)

]

export default validate(rules)
