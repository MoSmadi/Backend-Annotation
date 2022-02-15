import express from 'express'
import compression from "compression"
import cors from 'cors'
import http from 'http'

import { express as express_config } from '@config'
import helmet from 'helmet'

const app = express()


app.use('/assets', express_config.assets)
app.use('/favicon.ico', express_config.favicon)
app.use(helmet());
app.use(cors())
app.use(compression())
app.set('view engine', 'html'),
    app.engine('html', express_config.renderEngine)

app.use(express.json({ limit: '10mb', extended: true }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

const server = http.createServer(app)

export {
    app,
    server
}