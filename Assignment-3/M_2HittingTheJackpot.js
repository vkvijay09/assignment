const testJackpot = (arr) => {
	if(arr.length!=4)
		return false;
	else
		return arr.every( e => e === arr[0]);
};

console.log(testJackpot (["@", "@", "@", "@"]));
console.log(testJackpot (["abc", "abc", "abc", "abc"]));
console.log(testJackpot (["SS", "SS", "SS", "SS"]));
console.log(testJackpot (["&&", "&", "&&&", "&&&&"]));
console.log(testJackpot (["SS", "SS", "SS", "Ss"]));