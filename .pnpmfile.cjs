// Optional: pnpmfile for custom package resolution if needed
function readPackage(pkg) {
  return pkg
}

module.exports = {
  hooks: {
    readPackage
  }
}

