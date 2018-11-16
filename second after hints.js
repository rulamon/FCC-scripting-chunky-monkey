function chunkArrayInGroups(arr, size) {
	let newArr = [];
	while (arr.length) {
		newArr.push(arr.splice(0, size));
	}
	return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d", "e"], 2));