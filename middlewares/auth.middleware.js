const jwt = require('jsonwebtoken');



async function isLoggedIn(req, res, next) {
    try {
        const token = req.headers.authorization.split(' ')[1];
        if(token){ 
            const decoded = await jwt.verify(token, 'secret');
            return next()
        }
       
        return res.status(400).send({error:'user not logged in'});

        
    } catch (error) {
        return res.status(500).send(error.message);
        
    }
}

module.exports = isLoggedIn;