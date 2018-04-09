function isProd() {
    return process.env.NODE_ENV === 'production';
}

function inProdOrElse(prod, dev) {
    return isProd() ? prod : dev;
}

function enablePluginInProd(plugin) {
    return inProdOrElse([plugin], []);
}

exports.isProd = isProd;
exports.inProdOrElse = inProdOrElse;
exports.enablePluginInProd = enablePluginInProd;
