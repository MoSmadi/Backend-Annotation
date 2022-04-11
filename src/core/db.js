import mongoose from 'mongoose'
import { db } from '@config'

//const CONNECTION_URL = `mongodb://${db.db_username}:${encodeURIComponent(db.db_password)}@${db.db_host}:${db.db_port}/${db.db_name}`;

const CONNECTION_URL = `mongodb://${db.db_host}:${db.db_port}/${db.db_name}`;

export const connect = () => {
    return mongoose.connect(CONNECTION_URL, {
        useNewUrlParser: db.use_new_url_parser,
        useCreateIndex: true,
        useUnifiedTopology: true
    });
}

mongoose.set('useFindAndModify', db.use_find_and_modify);

export default mongoose;