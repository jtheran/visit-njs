import jwt from 'jsonwebtoken';
const key = process.env.KEY_SECRET || "zaqwer";

const validateToken = (req, res, next) => {
    
    const { token } = req.cookies;
    if (!token) {
        return res.status(401).json({ message: 'USER NOT AUTHORIZED' });
    }
    
    jwt.verify(token, key, (err, decoded) => {
        if (err) {
            console.log(err);
            return res.status(403).json({ message: 'INVALID TOKEN' });
        }
        req.decoded = decoded;  
        next();
    });
};    

module.exports = {
    validateToken
};