const { deletePictogram } = require('../../../logic')
const jwt = require('jsonwebtoken')

module.exports = (req, res, handleError) => {
    const { headers: { authorization }, body: { pictogramId}} = req


    const token = authorization.replace('Bearer ', '')

    try {
        const { sub: ownerId } = jwt.verify(token, JWT_SECRET)
        deletePictogram(pictogramId, ownerId)
            .then(() => res.status(200).send())
            .catch(handleError)
    } catch (error) {
        handleError(error)
    }
}