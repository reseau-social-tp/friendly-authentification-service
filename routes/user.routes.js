
const router = require('express').Router()
const auth = require("../middleware/auth")
const userCtrl = require("../controllers/user.controller")


router.get('/search', auth, userCtrl.searchUser)
router.get('/users/:id', userCtrl.getUsers)

router.get('/user/:id', userCtrl.getUser)

router.patch('/user/:id', userCtrl.updateUser)

router.patch('/user/:id/follow', userCtrl.follow)
router.patch('/user/:id/unfollow', userCtrl.unfollow)

router.get('/suggestionsUser', auth, userCtrl.suggestionsUser)



module.exports = router