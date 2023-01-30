exports.createPostsValidators = (req, res, next) => {
    // title validation
    req.check("title", "Title empty, please write a title").notEmpty();
    req.check("title", "Title must be between 4 and 150 characters").isLength({
        min:4, max:150
    });
    // body validation
    req.check("body", "Title empty, please write a title").notEmpty();
    req.check("body", "Body must be between 4 and 2000 characters").isLength({
        min:4, max:2000
    });
    const errors = req.validationErrors();
    if(errors){
        const firstError = errors.map((error) => error.msg)[0];
        return res.status(400).json({
            errorMsg: firstError
        })
    }
    next();
}