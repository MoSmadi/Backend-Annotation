import db from '@core/db';

const options =
    {
        collection: 'Annotation',
        timestamps: true
    }

const Annotation = new db.Schema({
    urlPage         :   { type: String, required: true },
    pageName        :   { type: String, required: true },
    text            :   { type: String, required: true },   // the selected word
    textCount       :   { type: String, required: true },   // number of the selected word in the page
    textCountNum    :   { type: String, required: true },   // the selected word position in the page
    context         :   { type: String, required: true }    // the paragraph

}, options);



export default db.model('Annotation', Annotation)