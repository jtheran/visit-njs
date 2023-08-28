const validateSchema = (schema) => (req, res, next) => {
    let body = req.body;
    try {
        schema.parse(body);
        next();
    } catch (err) {
        return res.status(400).json({
            error: err.issues.map(err => err.message)
        });
    }
};

module.exports = {
    validateSchema
}