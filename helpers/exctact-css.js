exports.extractDevCss = function extractDevCss(rules) {
    return rules;
};

exports.extractProdCss = function extractProdCss(cssExtractor) {
    return ([fallbackLoader, ...loaders]) => {
        return cssExtractor.extract({
            fallback: fallbackLoader,
            use: loaders
        })
    };
};