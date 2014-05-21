var fs        = require('fs')
var reader    = require('anviz-backup-reader')
var xlgen     = require('xlgen')

module.exports = function (source, output) {
	var xlDoc = xlgen.createXLGen(output)
	var sheet = xlDoc.addSheet('Sheet 1')

	sheet.cell(0, 0, 'User ID')
	sheet.cell(0, 1, 'Timestamp')
	sheet.cell(0, 2, 'Type')

	var records = reader.readFileSync(source)
	records.forEach(function(record, i) {
		sheet.cell(i+1, 0, record.userId)
		sheet.cell(i+1, 1, record.time)
		sheet.cell(i+1, 2, record.code)
	})

	xlDoc.end(function(err){
	    if (!!err) console.log(err)
	    else console.log('Complete!')
	})
}