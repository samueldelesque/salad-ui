var root = __dirname
var fs = require('fs-extra'),
    entrypoints = require('./conf/entrypoints'),
    exec = require('child_process').exec,
    _ = require('lodash'),
    distDir = root + '/dist/',
    versionBase = '1.1.',
    currentVersion = parseFloat(require(distDir + 'salad-ui/package.json').version.split('.')[2]),
    version = versionBase + (currentVersion + 1)

console.log('Attempt to publish all entrypoints... version: ', version)
console.log('Please verify /usr/local/bin/npm is available')

const childPackage = {
  "name": "salad-ui",
  "version": "1.0.0",
  "description": "Reusable React UI Components Toolkit",
  "main":"./salad-ui.js",
  "repository":{
    "type":"git",
    "url":"https://github.com/samueldelesque/salad-ui.git"
  },
  "keywords":[
    "react",
    "react-component",
    "react-chart",
    "react-graph"
  ]
}

_.map(entrypoints, async (entrypoint, name) => {
  console.log('Creating', name);
  const pk = _.merge(childPackage, {name: name, version: version, main: './'+name+'.js'})
  if(name !== 'salad-ui.lib'){
    pk.peerDependencies = {
      "react": "^16.0.0",
      "react-dom": "^16.0.0"
    }
  }
  fs.writeFile(distDir + name + '/package.json', JSON.stringify(pk), function(err){
    if(err){
      console.log('Could not save package.json!', err)
    }
    exec('cd ' + distDir + name + '; npm publish', function(error, stdout, stderr){
      if(error) console.log('Error: ', error)
      console.log(stdout)
    })
  })
})
