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
            id : saved_user._id,
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
        let user = User.findOne({email : data.email})

        if(user !== null && user !== undefined){
            //checking the password
            bcrypt.compare(data.password , user.password , (err , same) => {
                if(err) next(err);
                if(same){
                    //user authenticated sucessfully. Now we are generating the token
                    let token = jwt.sign({
                        id : user.name,
                        email : user.email,
                        name : user.name
                    })

                    res.cookie('jwt' , token)

                    res.send({
                        res : true,
                        msg : "User registered successfully"
                    })
                }
            })
        }

    }catch(err){
        next(err)
    }
})


module.exports = router