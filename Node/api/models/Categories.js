const mongoose = require('mongoose');
const schema = mongoose.Schema;

const categories = new schema (
    {
        name: {
            type: String
        },
        description: {
            type: String 
        }
    }, {
        collection: 'categories'
    }
)

module.exports = mongoose.model('categories', categories);