'use strict'

const jsonfile = require('jsonfile')
const path = require('path')

let jsonObj = {}

const devPackage = path.resolve(process.cwd(), 'package.json')
const appPackage = path.resolve(process.cwd(), 'app/package.json')

jsonfile.readFile(devPackage, (err, obj) => {
  if (err) {
    throw new Error(err)
  } else {
    jsonObj = {
      'name': obj.name,
      'productName': obj.build.productName,
      'version': obj.version,
      'description': obj.description,
      'author': obj.author,
      'private': true,
      'license': obj.license,
      'main': obj.main,
      'dependencies': obj.dependencies
    }

    jsonfile.writeFile(appPackage, jsonObj, (err) => {
      if (err) {
        throw new Error(err)
      }
    })
  }
})
