var express = require('express');
var router = express.Router();
var isNull = require('../script').isNull;


router.get('/', (req, res, next) => {
    req.session.destroy();
    res.redirect('./loginAreaMedico.html'); 
});

module.exports = router;
