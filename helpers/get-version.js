const GitRevisionPlugin = require('git-revision-webpack-plugin');

const DEFAULT_SEMVER_REGEXP = /\bv?((0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(-[\da-z-]+(?:\.[\da-z-]+)*)?(?:\+[\da-z-]+(\.[\da-z-]+)*)?)\b/ig;

module.exports = function getVersion(versionPattern = DEFAULT_SEMVER_REGEXP, fallback = '0.0.1') {
    try {
        const gitRevisionPlugin = new GitRevisionPlugin({lightweightTags: true});
        const tag = gitRevisionPlugin.version();
        const match = versionPattern.exec(tag);
        return match ? match[1] : fallback;
    } catch (error) {
        console.error('Can\'t extract app version from git repository:', error);
        return fallback;
    }
};
