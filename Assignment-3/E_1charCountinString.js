const charCount = (char,str) =>{
	let count=0;
	for(let i=0;i<str.length;i++)
		if(char === str[i])
			count++;
	return count;
}

console.log(charCount('c','circumference'));
console.log(charCount('C','circumference'));