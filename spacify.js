var fs = require('fs'),
	hex = 'coin.ascii',
	gif = 'file.gif',
	stream = fs.createReadStream(hex),
	data = ''
	;

stream.on('data', function(chunk) { data+=chunk; });


stream.on('end', function(){
	// console.log(data);
	spaceify(data);
});



var spaceify = function(data){
	data = data.split('');
	var result = [];

	for (var i = 1; i <= data.length+1; i++) {
		if (i%2 == 0) {
			result.push(data[i]+' ');
		} else {
			result.push(data[i]);
		}
	}

	result = result.join('');
	// console.log(result);

	createFile(result);


	return result;
};

var createFile = function(result){
	fs.writeFile(gif, result, function(err){
		if(err) throw err;
		console.log('yay');
	});
};
