const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
    sex: {
        type: String,
        required: true,
    },
    mobile: {
        type: Number
    },
    govtId: {
        type: String,
        unique: true
    },
    guardian: {
        type: String
    },
    email: {
        type: String,
        unique: true,
    },
    contact: {
        type: Number
    },
    address: {
        type: String
    },
    state: {
        type: String
    },
    ciry: {
        type: String
    },
    country: {
        type: String
    },
    pincode: {
        type: Number
    },
    occupation: {
        type: String
    },
    religion: {
        type: String
    },
    maritalStatus: {
        type: String
    }, 
    bloodGroup: {
        type: String
    },
    nationality: {
        type: String
    }

})

module.exports = mongoose.model("User", userSchema)