import { app } from '@core/server'
import users from './users/routes'
import comments from './comment/routes'
import annotation from './annotation/routes'

export default [
    app.use('/api/users', users),
    app.use('/api/comments', comments),
    app.use('/api/annotation', annotation)
]