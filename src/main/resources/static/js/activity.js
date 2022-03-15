const JWT = require(Path.join(__dirname, '..', 'lib', 'jwtDecoder.js'));

JWT(req.body, process.env.My_JWT_Key, async function(err, decoded) {
        if (err) {
            console.log("Invalid JWT::" + req.body);
            return res.status(401).end();
        } else {
            console.log("JWT Authentication Successful:", decoded);
        }
});
