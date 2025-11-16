const User = require("../models/User");

const UserController = async (req, res) => {
    // 200 == successfull
    if(await User.findOne({email: req.body.email})){
        res.status(200).json({message:"User Exists"})
    }
    // 201 == new user // faulty in the existing one
    else{
        const newUser = new User({email:req.body.email,password:req.body.password})
        await newUser.save()
        res.status(200).json({message:"New user"})

    }
    
};

module.exports = UserController;