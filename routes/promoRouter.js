const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all( (req, res, next)=> {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req, res, next) => {
    res.end('Will send all the promotions to you');
})
.post((req, res, next) => {
    res.end('Will add the promotions : ' + req.body.name +  ' with details : ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
   res.end("Put operation not supported on promotions");
})
.delete((req, res, next) => {
   res.end("Deleting all the promotions");
});

promoRouter.route('/:promoId')
.all( (req, res, next)=> {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req, res, next) => {
    res.end('Will send the promo to you ' + req.params.promoId);
})
.post((req, res, next) => {
    res.end('Will add the promo : ' + req.params.promoId +  ' with details : ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
   res.end("Put operation not supported " + req.params.promoId);
})
.delete((req, res, next) => {
   res.end("Deleting the promo with id : " + req.params.promoId);
});

module.exports = promoRouter;
