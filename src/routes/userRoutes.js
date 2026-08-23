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
    try {
        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        })
        await userService.saveUser(user)
        res.status(201).send("Saved user data successfully")
    } catch (err) {
        console.log(err)
        res.status(500).send("Save data failed with internal server issue")
    }

})

router.patch(userUrl, (req, res) => {
    // User service

})

router.delete(userUrl, (req, res) => {
    // User service

})

module.exports = router
