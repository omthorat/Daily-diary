const jwt= require("jsonwebtoken")
const genrateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRETE,{
        expiresIn:"30d"
    })
}
module.exports=genrateToken