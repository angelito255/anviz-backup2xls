#!/usr/bin/env node
var path     = require('path')
var yargs = require('yargs')
var bak2xls  = require('./')

var argv = yargs
	.usage('Usage: $0 [OPTIONS] -i INPUT [-o OUTPUT]')

var input  = argv.argv._[0]
var output = argv.argv._[1]

if (!input || !output) {
	yargs.showHelp()
	process.exit(1)
}

bak2xls(input, output)