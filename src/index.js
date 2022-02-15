import 'dotenv/config';
import { server as server_config } from '@config'
import { server } from '@core/server'
import { registerRoutes } from '@core/router'
import { connect } from '@core/db'
import modules from '@app/modules'

const port = server_config.port

connect().then(() => {
    registerRoutes(modules)
    server.listen(port, () => {
        console.log(`Server is listening to ${port}`)
    });
}).catch((e) => {
    console.log("database couldn't connect", e);
})