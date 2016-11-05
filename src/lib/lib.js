import childrenWithProps from './children-with-props'
import * as formatter from './formatter.js'
import domainService from './domain-service'
import * as tracking from './tracking'
import * as http from './http'
import glob from './glob'
import scrollTo from './scroll-to'
import sso from './sso'

const Lib = {
  childrenWithProps,
  formatter,
  domainService,
  tracking,
  http,
  f: http,
  glob,
  scrollTo,
  sso,
}

module.exports = Lib
