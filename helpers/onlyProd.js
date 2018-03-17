module.exports = function onlyProd(element) {
    if (process.env.NODE_ENV === 'production') {
        return [element];
    }
    return [];
};
