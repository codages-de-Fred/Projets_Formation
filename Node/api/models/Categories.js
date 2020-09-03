const mongoose = require('mongoose');
const schema = mongoose.Schema;

const categories = new schema (
    {
        name: {
            type: String
        },
        description: {
            type: String 
        },
        products : [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'product'
        }]
    }, {
        collection: 'categories'
    }
)

module.exports = mongoose.model('categories', categories);