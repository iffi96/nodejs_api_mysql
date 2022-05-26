const {
    getUser,
    signup,
    // createUser,
    // login
} = require('../controller/users.controller');
const router = require('express').Router();


router.get('/', getUser);
router.post("/signup", signup);
// router.post('/login', login);

module.exports = router;