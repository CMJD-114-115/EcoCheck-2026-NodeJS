const express = require("express")
const router = express.Router()
const userUrl = "/users"
const userService = require("../service/userService")
const User = require("../model/userModel")

router.get(userUrl, async (req, res) => {
    try {
        const allUsers = await serService.getAllUsers()
        const users = allUsers.map(user => ({
            userId: user.userId,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password,
            role: user.role
        }));
        console.log(users)
        res.status(200).json(users)
    } catch (err) {
        console.error(err)
    }


})

router.post(userUrl, (req, res) => {
   

})

router.patch(userUrl, (req, res) => {
    // User service

})

router.delete(userUrl, (req, res) => {
    // User service

})

module.exports = router
