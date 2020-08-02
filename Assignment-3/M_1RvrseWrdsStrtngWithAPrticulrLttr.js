const specialReverse = (str,char) => {

	let strArray = str.split(' ');
	map1 = strArray.map((x) => {
		if(x.startsWith(char))
			return x.split('').reverse().join('') ;
		else
			return x;
	});
	
	return map1.join(' ');
}

console.log(specialReverse("word searches are super fun", "s"));
console.log(specialReverse ("first man to walk on the moon", "m"));
console.log(specialReverse ("peter piper picked pickled peppers", "p"));