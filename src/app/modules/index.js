import { app } from '@core/server'
import users from './users/routes'

export default [
    app.use('/api/users', users)
]