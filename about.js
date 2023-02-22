console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("it was submitted");
	addEventListener();
}
function shoes(){
	alert("nice shoes!")
}

let form = document.querySelector('#contact');
let image = document.querySelector('img');

form.addEventListener('submit', handleSubmit);

image.addEventListener('mouseover', shoes);