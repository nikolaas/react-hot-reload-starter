module.exports = function onlyProd(element) {
    if (process.env.NODE_ENV === 'production') {
        console.log('Only in prod', element);
        return [element];
    }
    return [];
}
