module.exports = {
    "setupFiles": ["./test/jestsetup.js"],
    "transform": {
        "^.+\\.jsx?$": "babel-jest"
    },
    "snapshotSerializers": [
        "<rootDir>/node_modules/enzyme-to-json/serializer"
    ],
    "moduleNameMapper": {
        "^.+\\.(css|scss)$": "identity-obj-proxy"
    },
    "moduleDirectories": ["node_modules", "src"]
};