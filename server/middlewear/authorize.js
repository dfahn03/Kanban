

export class Authorize {
    static authenticated(req, res, next) {
        if (!req.session.uid) {
            return res.status(401).send({
                error: 'Please Login to Continue'
            })
        }
        next()
    }
}
