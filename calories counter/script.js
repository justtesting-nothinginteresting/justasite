/*
console.log(7, "abc", true);
let last_exercise;
last_exercise = document.querySelector ('OL').lastElementChild;
//console.log (last_exercise);
last_exercise.style.color = "brown"
*/
let knopochka;
knopochka = document.querySelector('#knopka');
knopochka.addEventListener('click', function() {
document.querySelector(".result").textContent = document.querySelector('#lunge').value*12+document.querySelector('#pushup').value*1+document.querySelector('#situp').value*0.43+document.querySelector('#jumping').value*0.13;
})
let toggles;
toggles = document.querySelectorAll(".exercise-toggle");
for (var index = 0; index < toggles.length; index++) {
	let toggle; 
	toggle = toggles[index];
	console.log(index, toggle);
	let element;
	element = document.querySelectorAll(".exercise") [index];
	toggle.addEventListener('click', function() {

		element.classList.toggle('exercise-shrunk'); 
	});
}	

let repeater;
repeater = document.querySelector('#abab')
repeater.addEventListener('click', function() {
document.querySelector(".rezultat").textContent = document.querySelector('#repeat1').value*1+document.querySelector('#repeat2').value*1+document.querySelector('#repeat3').value*1+document.querySelector('#repeat4').value*1;	
})
