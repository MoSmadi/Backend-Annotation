import db from '@core/db';
import mongoose_delete from 'mongoose-delete';
import mongoosePaginate from '@app/db/plugins/pagination';

const options = {
    discriminatorKey: 'type',
    collection: 'User',
    timestamps: true
}

const User = new db.Schema({
    first_name: String,
    last_name: String,
    phone_number: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, select: false }
}, options);

User.index({ country: 1, city: 1 }, { unique: false })
User.index({ email: 1 }, { unique: true })
User.index({ phone_number: 1 }, { unique: true })
User.plugin(mongoosePaginate);

User.plugin(mongoose_delete, {
    overrideMethods: ['find', 'countDocuments'],
    deletedAt: true,
    deletedBy: true
})

export default db.model('User', User)