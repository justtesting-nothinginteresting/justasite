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
let lunges = +document.querySelector('#lunge').value
let pushups = +document.querySelector('#pushup').value
let situps = +document.querySelector('#situp').value
let jumps = +document.querySelector('#jumping').value
document.querySelector(".result").textContent = lunges*12+pushups*1+situps*0.43+jumps*0.13;
document.querySelector(".rezultat").textContent = lunges+pushups+situps+jumps;
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