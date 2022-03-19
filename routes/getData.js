var express = require('express');
const { basic } = require('jade/lib/doctypes');
const { stringify } = require('jade/lib/utils');
var router = express.Router();

const sum = function (num) {
    return (1 + num) * num / 2;
}

/* getData */
router.get('/', function (req, res, next) {
    const number = req.query.number;
    if (number !== undefined) {
        if (number >>> 0 === parseFloat(number)) { // positive integer
            res.render('getData', { number: "Answer = " + sum(parseInt(number)).toString() });
        } else {
            res.render('getData', { number: "Wrong Parameter" });
        }
    } else {
        res.render('getData', { number: "Lack of Parameter" });
    }
});

/* post */
router.post('/', function (req, res) {
    var message = {
        number: ""
    }
    let number = req.body.number;
    message.number = sum(parseInt(number)).toString();
    res.send(message);
});

module.exports = router;