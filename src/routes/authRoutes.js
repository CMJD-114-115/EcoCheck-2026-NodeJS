const express = require("express")
const router = express.Router()
const authUrl = "/auth"
const User = require("../model/userModel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const jwtSecret = process.env.JWT_SECRET
const jwtExpireIn = process.env.JWT_EXPIRE_IN

//Sign Up

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