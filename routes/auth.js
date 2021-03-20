let router = require('express').Router();
let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');
let User = require('../database/modals/user')

router.post('/registerUser' , async (req , res , next) => {

    try{
        let data = req.body;
        data.password = await bcrypt.hash(data.password , 10);
        let user = new User(data);
        let saved_user = await user.save()

        let token = jwt.sign({
            email : saved_user._id,
            name : saved_user.name,
            email : saved_user.email
        })

        res.cookie('jwt' , token)
        res.send({
            res : true,
            msg : "user registered sucessfully"
        })

    }catch(err){
        next(err)
    }

})


router.post('/loginUser' , (req , res , next) => {
    try {
        let data = req.body;
    }catch(err){
        next(err)
    }
})

module.exports = router