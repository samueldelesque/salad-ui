import * as format from './format'
import * as tracking from './tracking'
import * as http from './http'
import glob from './glob'
import scrollTo from './scroll-to'

const Lib = {
  format,
  formatter: format,
  tracking,
  http,
  f: http,
  glob,
  scrollTo
}

module.exports = Lib
