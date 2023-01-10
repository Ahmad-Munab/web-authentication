const path = require("path")
const asyncHandler = require("express-async-handler")
const bcrypt = require("bcrypt")

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    res.status(200).json({ email, password })
})

module.exports = {
    login
}