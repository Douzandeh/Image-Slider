let i = 0 // current slide
let j = 4 // total slides

function next () {
	document.getElementById("content" + (i+1)).classList.remove("active")
	i = (j + i + 1) % j;
	document.getElementById("content" + (i+1)).classList.add("active")
}

function prev() {
	document.getElementById("content" + (i+1)).classList.remove("active");
	i = (j + i - 1) % j;
	document.getElementById("content" + (i+1)).classList.add("active");
}