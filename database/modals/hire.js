let mongoose = require('mongoose')


let HireSchema = mongoose.Schema({
    createdBy: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'hire'
    },
    title: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    totalNumber: {
        required: true,
        type: Number
    },
    workerHired: [{
        type: mongoose.Types.ObjectId
    }]
})

module.exports = mongoose.model('hire', HireSchema)