// your code here
let form = document.querySelector('form')
let inputBox = document.getElementById('name')
let inputNumber = document.getElementById('year');
let h3 = document.getElementById('url');

form.addEventListener("submit" , (e)=>{
	let name = inputBox.value;
	let year = inputNumber.value;
	h3.innerText = `https://localhost:8080/${name}`;
})