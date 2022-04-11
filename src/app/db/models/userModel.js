// import db from '@core/db';
const db = require('mongoose');
// const bcrypt = require('bcryptjs');
// import mongoose_delete from 'mongoose-delete';
// import mongoosePaginate from '@app/db/plugins/pagination';

const options = {
    collection: 'User',
    timestamps: true
}

const User = new db.Schema({
    full_name: { type: String, required: true },
    phone_number: { type: Number, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true  },//,select: false
    isLogged : {type: Boolean,default: false}
}, options);

User.index({ email: 1 }, { unique: true })
User.index({ phone_number: 1 }, { unique: true })

// encrypt the password
// User.pre('save' ,async function(next) {
//     if(!this.isModified('password'))
//     {
//         next();
//     }
//     const salt = await bcrypt.genSalt(10)
//     this.password=await bcrypt.hash(this.password , salt)
// })

export default db.model('User', User)