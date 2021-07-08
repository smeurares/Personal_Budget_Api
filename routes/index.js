var express = require('express');
var router = express.Router();


const envelopesRouter = require('./envelopes');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/envelopes', envelopesRouter)




module.exports = router;
