require('dotenv').config()
let express = require('express')
let cors = require('cors')
let morgan = require('morgan')
const { logData } = require('./utility')
let routes = require('./routes')

let app = express()

//database
require('./database')

let isDev = process.env.NODE_ENV != 'production'

//all the middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(morgan('tiny'))
app.use('/api/v1' , routes)

app.all("*" , (req , res) => {
    res.status(404).send({
        msg : "The resource that you are trying to access is not available",
        res : true
    })
})

//error handler
let errorHandler = (err , req , res , next) => {
    console.log(err);
    res.status(500).send({
        err : isDev ? err: "Please contact the developer for more info",
        msg : "There was some internal server error",
        res : false
    })
}

app.use(errorHandler)


let PORT = process.env.PORT || 8080
app.listen(PORT , () => {
    //console.clear()
    logData(`Server started on port ${PORT}`)
})