const asyncHandler = require('express-async-handler');
const User = require("../model/userModel");

const getUser = asyncHandler(async (request, response) => {
    const users = await User.find().lean()

    if (!users) {
        return response.status(400).json({ message: 'No Data Displayed' })
    }
    response.status(200).json(users);
})

const addUser = asyncHandler(async (request, response) => {
    const { 
        name, age, sex, mobile, govtId, guardian, email, contact, 
        address, state, city, country, pincode, occupation, religion,
        maritalStatus, bloodGroup, nationality 
    } = request.body;
    console.log(request.body);

    if(!name||!age||!sex||!mobile){
        return response.status(400).json({message:"all fields are mandatory"})
    }

    const userObject = {
        name, age, sex, mobile, govtId, guardian, 
        email,contact, address, state, city, country, pincode,
        occupation, religion,maritalStatus, bloodGroup, nationality
     }

     const user = await User.create(userObject)
     if(!user){
        return response.status(400).json({message:"User could not be saved"})
     }

     response.status(200).json(user)
     console.log(user);
})

module.exports = { getUser ,addUser}