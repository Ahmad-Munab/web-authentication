const express = require('express');
const router = express.Router()
const path = require('path');

const { login } = require("../controllers/loginController")

router.route('/')
    .get(login)

module.exports = router