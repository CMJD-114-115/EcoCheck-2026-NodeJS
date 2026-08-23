const express = require("express")
const router = express.Router()
const userUrl = "/users"
const userService = require("../service/userService")
const User = require("../model/userModel")

router.get(userUrl, async (req, res) => {
    try {
        const allUsers = await userService.getAllUsers()
        console.log(allUsers)
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

router.post(userUrl, async (req, res) => {
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
        res.status(500).send("Save process failed with internal server issue")
    }

})

router.patch(`${userUrl}/:id`, async (req, res) => {
    try {
        const userId = req.params.id
        const userData = req.body

        await userService.updateUser(userId, userData)
        res.status(204).send("User data updated")

    } catch (err) {
        console.err(err)
        res.status(500).send("Update process failed with internal server issue")
    }
})

router.delete(`${userUrl}/:id`, async (req, res) => {
    try {
        const userId = req.params.id
        await userService.deleteUser(userId)
        res.status(204).send("User deleted")
    } catch (err) {
        console.error(err)
        res.status(500).send("Delete process failed with internal server issue")
    }

})

module.exports = router
