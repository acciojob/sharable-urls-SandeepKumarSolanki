// your code here
let form = document.querySelector('form')
let inputBox = document.getElementById('name')
let inputNumber = document.getElementById('year');
let h3 = document.getElementById('url');

form.addEventListener("submit" , (e)=>{
	e.preventDefault();
	let name = inputBox.value;
	let year = inputNumber.value;
	if(name && year){
		h3.innerText = `https://localhost:8080/?name=${name}&year=${year}`;
		
	}else if(name && !year){
		h3.innerText = `https://localhost:8080/?name=${name}`;
		
	}else if(!name  && year){
		h3.innerText = `https://localhost:8080/?year=${year}`;
	}else{
		h3.innerText = `https://localhost:8080/`;
	}
	
})