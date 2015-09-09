var fs 		= require('fs'),
	inFile		 	= 'coin.txt',
	stream 	= fs.createReadStream(inFile),
	data 		= '',
	outFile 		=	'coin.hex'
	;

stream.on('data', function(chunk) { data+=chunk; });

stream.on('end',function(){
	decode();
});

var decode = function(){
	var ascii = new Buffer(data, 'base64').toString('ascii'),
		utf8 = new Buffer(data, 'base64').toString('utf8'),
		base64 = new Buffer(data, 'base64').toString('base64'),
		hex = new Buffer(data, 'base64').toString('hex'),
		binary = new Buffer(data, 'base64').toString('binary')
		asciiHex = new Buffer(ascii, 'hex').toString('ascii')
	;

	save(asciiHex);
}

var save = function(data){
	fs.writeFile(outFile, data, function(){
		console.log('File saved');
	});
};

// fs.readFile(file, function(err,data){
// 	if(err) throw err;
// 	console.log(data);
// });
