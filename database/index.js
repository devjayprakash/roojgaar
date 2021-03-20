let mongoose = require('mongoose')

mongoose.connect('' , {
    useNewUrlParser : true,
    useUnifiedTopology : true
})


let db = mongoose.connection;

db.on('open' , () => {
    console.log('Connected to the database successfully');
}) 

db.on('close' , (err) => {
    console.log('There was some error during connecting to the database')
    console.error(err);
}) 