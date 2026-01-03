/** Upgrade major version zero to the next minor version, and everything else to latest.
  @param dependencyName The name of the dependency.
  @param parsedVersion A parsed Semver object of the upgraded version.
    (See: https://git.coolaj86.com/coolaj86/semver-utils.js#semverutils-parse-semverstring)
  @returns One of the valid target values (specified in the table above).
*/
module.exports = {
  target: (
    dependencyName,
    [{ semver, version, operator, major, minor, patch, release, build }]
  ) => {
    if (dependencyName === 'lit') {
      return 'minor';
    }
    return 'latest';
  },
};
