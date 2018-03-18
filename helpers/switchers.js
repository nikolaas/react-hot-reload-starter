function isProd() {
    return process.env.NODE_ENV === 'production';
}

function enableInProd(prod, dev) {
    return isProd() ? prod : dev;
}

function enablePluginInProd(plugin) {
    return enableInProd([plugin], []);
}

exports.enableInProd = enableInProd;

exports.enablePluginInProd = enablePluginInProd;
