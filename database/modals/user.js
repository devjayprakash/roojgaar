let mongoose = require('mongoose')

let User = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    registeredAs : {
        type : String,
        required : true
    },
    type : {
        type : String,
        required : true
    },
    emailID : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    //these info is
    companyName : String,
    gstIn : String,

    //only if the type is seller
    jobTitle : String,

})

module.exports = mongoose.model('user' , User)