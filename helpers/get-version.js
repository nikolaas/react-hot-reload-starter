const GitRevisionPlugin = require('git-revision-webpack-plugin');

module.exports = function getVersion() {
    const gitRevisionPlugin = new GitRevisionPlugin({lightweightTags: true});
    return gitRevisionPlugin.version().substring(1, 10);
};
