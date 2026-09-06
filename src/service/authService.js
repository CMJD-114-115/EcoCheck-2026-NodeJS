const User = require("../model/userModel")
const { v4: uuid4 } = require("uuid")
const bcrypt = require("bcryptjs")

async function addUser(user) {
    console.log("To be save user is", user)
    try {
        const hashPassword = await bcrypt.hash(user.password, 10)
        const newUser = new User({
            userId: uuid4(),
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: hashPassword,
            role: user.role

        })
        return newUser.save();
    } catch (err) {
        console.error(err)
    }

}

async function findUser(email){
    try{
      const user = await User.findOne({email})
      return user;
    }catch(err){
        console.error(err)
    }
}

module.exports = { addUser, findUser }