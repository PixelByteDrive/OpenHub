const User = require('../../database/models/user');
module.exports = {
    get: async (req, res, next) => {
        if (!req.query.method) {
            return res.status(400).json({
                status: false,
                message: 'No method specified'
            });
        }
        if (req.query.method != 'discord' || req.query.method != 'roblox' || req.query.method != 'id') {
            return res.status(400).json({
                status: false,
                message: 'Invalid method specified'
            });
        }
        if (req.)
            if (req.params.id) {

            }
    },
}