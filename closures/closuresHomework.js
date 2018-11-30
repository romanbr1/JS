function makeBuffer() {

	var bufferVelue = '';

	function buffer(value) {
		if (value === undefined)
			value = '';
		return bufferVelue += value;
	};
	buffer.clear = function() {
		bufferVelue = '';
	}
	return buffer;

}

var buffer = makeBuffer();
buffer('JavaScript');
buffer('Вчити');
buffer('Потрібно!');
console.log(buffer());

var buffer = makeBuffer();
buffer(0);
buffer(1);
buffer(0);
console.log(buffer());

var buffer = makeBuffer();
buffer("Тест ");
buffer("тебе не з'їсть");
console.log(buffer()); 
buffer.clear();
console.log(buffer()); 
