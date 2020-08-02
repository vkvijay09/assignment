const realType = (arg) => {
	if(Array.isArray(arg))
		return "array";
	else if(arg === null)
		return "null";
	else
		return typeof arg;
};

console.log(realType (1));
console.log(realType("a"));
console.log(realType(true));
console.log(realType([]));
console.log(realType(null));