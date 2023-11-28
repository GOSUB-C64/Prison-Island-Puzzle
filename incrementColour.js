function incrementColour(index, myColArr) {
	if (index < 4) {
		console.log(myColArr[index], index)
		circle1.style = `background-color:${myColArr[index]}`
	} else {
		index = 0
	}
	index++
}
