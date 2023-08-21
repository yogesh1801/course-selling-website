const jwt = require ("jsonwebtoken")
const SECRET = "SECRET"


function jwtAuth (req , res , next) {
    const authData = req.headers.authorisation
    if (authData) {
        const token = authData.split(" ")[1]
        jwt.verify(token , SECRET , (err ,data) => {
            if (err) {
                res.status(403)
            }
            else {
                req.user = data
                next();
            }
        })
    } else {
        res.status(401)
    }
}

module.exports = {
    jwtAuth , SECRET
}