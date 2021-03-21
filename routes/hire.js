let router = require('express').Router()
let Hire = require('../database/modals/hire')
let ObjectID = require('mongoose').Types.ObjectId;

router.post('/createHire', async (req, res, next) => {
    let data = req.body;

    //console.log(data);

    try {

        let hire = new Hire(data);
        let saved_hire = await hire.save()

        res.send({
            res: true,
            msg: "Hire created sucessfully",
            saved_hire: saved_hire
        })
    } catch (err) {
        next(err)
    }

})

router.post('/addWorker', async (req, res, next) => {
    let data = req.body;

    try {
        await Hire.findOneAndUpdate({ _id: data.id }, {
            $push: {
                workerHired: data.worker
            }
        })

        res.send({
            res: true,
            msg: "Worker added sucessfully sucessfully"
        })
    } catch (err) {
        next(err)
    }

})

router.post('/removeWoker', async (req, res, next) => {
    let data = req.body;

    try {
        await Hire.findByIdAndUpdate({ _id: data.id }, {
            $pull: {
                workerHired: data.worker
            }
        })

        res.send({
            res: true,
            msg: "Worker removed sucessfully sucessfully"
        })
    } catch (err) {
        next(err)
    }

})

router.get('/getHires/:id', async (req, res, next) => {
    try {

        let id = req.params.id;

        let hires = await Hire.find({ createdBy: new ObjectID(id) })

        res.send({
            res: true,
            hires: hires
        })

    } catch (err) {
        next(err)
    }
})


router.get('/all', async (req, res, next) => {
    try {
        let hires = await Hire.find()

        res.send({
            res: true,
            hires: hires
        })

    } catch (err) {
        next(err)
    }
})

module.exports = router