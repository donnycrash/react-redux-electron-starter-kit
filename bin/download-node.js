var binary = require('node-binary')
var path = require('path')
var fs = require('fs')

var args = process.argv.slice(2)
var platform = process.platform
var arch = process.arch
var downloadPath = 'node_modules/.bin'
args.forEach((arg, index, array) => {
  switch (arg) {
    case '--platform':
    case '--p':
      platform = array[index + 1]
      break
    case '--arch':
    case '--a':
      arch = array[index + 1]
      break
    case '--dist':
    case '--d':
      downloadPath = 'app/node_modules/.bin'
      break
  }
})
var nodePath = path.resolve(process.cwd(), downloadPath)
// Only need this for Linux
if (platform === 'linux') {
  binary.download({
    os: platform,
    arch: arch,
    version: 'v5.11.0'
  }, nodePath, (err, downloadPath) => {
    if (err) throw err
    fs.renameSync(downloadPath, path.resolve(nodePath, 'node'))
    console.log(`The node binary for ${platform} ${arch} was downloaded to ${nodePath}`)
  })
}
