const path = require('path');
const User = require(path.join(__dirname, '../models/User'))

const asyncHandler = require("express-async-handler")


const getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find().select().lean()
    if (!users?.length) {
        return res.status(404).json({
            message: "No users found"
        })
    }
    return res.status(200).json(users)
})

module.exports = getAllUsers