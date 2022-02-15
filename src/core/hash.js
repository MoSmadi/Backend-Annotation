import crypto from 'crypto'
import { server as server_config } from '@config'

export const encrypt = (text) => {
    if (!text) {
        throw new Error('Must provide a value to encrypt');
    } 
    let hash = crypto.createHmac('sha512', server_config.hash);
    hash.update(text);
    let value = hash.digest('hex');
    return value
}


export const compare = (text, encrypted) => {
    if (encrypt(text) == encrypted) {
        return true
    }

    return false
}