const User = require("../model/userModel")

async function getAllUsers() {
    return User.find()
}

async function saveUser(user) {
    const saveUser = new User(user)
    return saveUser.save()
}

async function updateUser(userId, user) {
    return User.findOneAndUpdate({ userId: userId }, user, { new: true })
}

async function deleteUser(userId) {
    return User.findOneAndDelete(userId)
}

module.exports = { getAllUsers, saveUser, updateUser, deleteUser }