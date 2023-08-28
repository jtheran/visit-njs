const jwt = require('jsonwebtoken');
const key = process.env.KEY_SECRET || "zaqwer";

function createToken (payload) {
   return new Promise((resolve, reject) => {

        jwt.sign(payload,key,{}, (err, token) => {
            if (err) {
                reject(err);
            }else{
                console.log(key)
                resolve(token);
            }
        });
    });
}

module.exports = {
    createToken
};