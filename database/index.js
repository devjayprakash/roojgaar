let mongoose = require('mongoose');
const { logData, logError } = require('../utility');

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vflma.mongodb.net/roojgaar?retryWrites=true&w=majority` , {
    useNewUrlParser : true,
    useUnifiedTopology : true
})


let db = mongoose.connection;

db.on('open' , () => {
    logData('Connected to the database successfully');
}) 

db.on('close' , (err) => {
    logError('There was some error during connecting to the database')
    logError(err);
}) 