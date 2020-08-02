const removeDups = (arr) =>{
	let unique=[];

	for(let i=0;i<arr.length;i++){
		let bool=null;
		for(let j=i-1;j>=0;j--){
			bool = arr[i] === arr[j];
			if(bool)
				break;
		}
		if(!bool)
			unique.push(arr[i]);
	}
	return unique;
};

console.log(removeDups([1,0,1,0]));
console.log(removeDups(["The", "big", "cat"]));
console.log(removeDups(["John", "Taylor", "John"]));
console.log(removeDups("krishanrajborana".split('')));