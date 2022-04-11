import db from '@core/db';

const options =
    {
    collection: 'Comment',
    timestamps: true
}

const Comment = new db.Schema({
    userId: {
        type: db.Schema.Types.ObjectId,
        ref: 'User'
    },

    annotateId: {
        type: db.Schema.Types.ObjectId,
        ref: 'Annotation'
    },

    text: { type: String, required: true },

    reply : new db.Schema({
            userId: {
                type: db.Schema.Types.ObjectId,
                ref: 'User'
            },

            Text: { type: String, required: true }
    })
}, options);

export default db.model('Comment', Comment)