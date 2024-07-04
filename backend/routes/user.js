const express = require ('express')

const {loginUser, signupUser} = require('../Controllers/userController')

const router = express.Router()

//login route
router.post('/login', loginUser)

//dignup route
router.post('/signup', signupUser)


module.exports = router