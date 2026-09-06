const express = require("express")
const router = express.Router()
const authUrl = "/auth"
const User = require("../model/userModel")
const { addUser, findUser} = require("../service/authService")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const jwtSecret = process.env.JWT_SECRET
const jwtExpireIn = process.env.JWT_EXPIRE_IN

//Sign Up

router.post(`${authUrl}/signup`, async (req, res) => {
    const {firstName, lastName,email,password,role} = req.body

    if(!firstName || !lastName || !email || !password || !role){
        return res.status(401).json({error: "Missing required field(s)"})
    }

    try {
        const user = addUser(req.body)
        //token generate
        const token = jwt.sign({userId: user.email}, jwtSecret, {expiresIn: jwtExpireIn})
        return res.status(201).json({message: "User Created",token})
    } catch (err) {
        console.error(err)
        return res.status(500).json({ message: "Internal Server Failed" })
    }

})

// sign in
router.post(`${authUrl}/login`,async (req,res)=>{
    const { email, password } = req.body
    // Find the user
    const foundUser = await User.findOne({email})
    console.log("found user is", foundUser)
    // Password check
    const isValidPassword = await bcrypt.compare(password, foundUser.password)

    if (!foundUser || ! isValidPassword){
        return res.status(401).json({ error: "Invalid Credentials"})
    }
    const token = jwt.sign({ userId: foundUser.email }, jwtSecret, { expiresIn: jwtExpireIn })
    return res.status(200).json({ message: "User Granted", token })


})

module.exports = router