var path = require('path');
var express = require('express');

/**
 * Accepts the same arguments as the method http://expressjs.com/en/api.html#res.sendFile
 * @param args
 * @returns {Function}
 */
var historyApiFallback = function (...args) {
    return function (req, res, next) {
        if ((req.method === 'GET' || req.method === 'HEAD') && req.accepts('html')) {
            res.sendFile(...args, err => err && next());
        } else {
            next();
        }
    };
};

var port = process.env.PORT || 9000;
var root = path.resolve(__dirname, '../dist');

var app = express();

app.use(express.static(root));
app.use(historyApiFallback('index.html', { root }));

app.listen(port, function () {
    console.log(`Some-service app started on port ${port}`);
});
