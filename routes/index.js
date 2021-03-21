let router = require('express').Router()
let auth = require('./auth')
let hire = require('./hire')

router.use('/auth', auth)
router.use('/hire', hire)

module.exports = router