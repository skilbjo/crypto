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

var coin = function(){
	var binary = '01100010011010010111010000'+
	'101110011011000111100'+
	'1001011110011000101'+
	'000011011110010101'+
	'000100110001011'+
	'0001001100011'
	;

	var translation = new Buffer(binary.slice(2),'hex').toString('ascii');

	console.log('bit.ly/1CyQ1bc');

};

var decode = function(){
	var ascii = new Buffer(data, 'base64').toString('ascii'),
		utf8 = new Buffer(data, 'base64').toString('utf8'),
		base64 = new Buffer(data, 'base64').toString('base64'),
		hex = new Buffer(data, 'base64').toString('hex'),
		binary = new Buffer(data, 'base64').toString('binary'),
		asciiHex = new Buffer(ascii, 'hex').toString('ascii')
	;

	// console.log(asciiHex);
	save(asciiHex);
};

coin();

var save = function(data){
	fs.writeFile(outFile, data, function(){
		console.log('File saved');
	});
};

// fs.readFile(file, function(err,data){
// 	if(err) throw err;
// 	console.log(data);
// });
