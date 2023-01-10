const path = require("path")
const asyncHandler = require("express-async-handler")
const bcrypt = require("bcrypt")

const User = require(path.join(__dirname,"../models/User"))

const register = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    console.log(email, password)
    try {
        await bcrypt.hash(password, 10)
        const newUser = new User({email, password})
        await newUser.save
        res.status(200).json({ message: "New user created" })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

module.exports = {
    register
}