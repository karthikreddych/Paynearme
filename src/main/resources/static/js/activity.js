router.post('/execute', function (req, res) {
    jwt.verify(getToken(req.body), process.env.JWT, async (err, decoded) => {
        if (err) return res.status(401).json(err);

        if (decoded && decoded.inArguments && decoded.inArguments.length > 0) {
            // code logic - program never gets here
        } else {
            res.status(400).end("Something went wrong. Please try again.");
        }
    })
})

function getToken(requestBody) {
    return jwt.sign(requestBody, process.env.JWT);
}
