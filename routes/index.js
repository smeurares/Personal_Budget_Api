var express = require('express');
var indexRouter = express.Router();


const envelopesRouter = require('./envelopes');

indexRouter.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

indexRouter.use('/envelopes', envelopesRouter)




module.exports = indexRouter;
