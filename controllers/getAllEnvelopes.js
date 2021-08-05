const {envelopes} = require('../data/db');

const getAllEnvelopes = (req, res, next) => {
    res.send(envelopes);
}

module.exports = getAllEnvelopes;