let mongoose = require('mongoose')

let User = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    registeredAs: {
        type: String,
        required: true
    },
    type: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('user', User)