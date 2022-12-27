const jwt = require('jsonwebtoken')
const User = require("../models/user");

const requireLogin = (req, res, next) => {
    const {authorization} = req.headers;
    if(!authorization){
        console.log("No auth bearer"); 
       return res.status(401).json({error:"You must be logged in to access this"})
    }
    const token = authorization.replace("Bearer ","")
    jwt.verify(token,process.env.jwt_secret, (err, payload) => {
        if(err){
            console.log(err);
            return res.status(401).json({error:"You must be logged in to access this"})
        }

        const {_id} = payload;
        User.findById(_id).then(userdata => {
            req.user = userdata;
            next();
        });
        
        
    });
};

module.exports = requireLogin