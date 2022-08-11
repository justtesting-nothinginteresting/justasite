let knopochka;
knopochka = document.querySelector('#knopka');
knopochka.addEventListener('click', function() {
	console.log(document.querySelector('#parol').value) 
	console.log(document.querySelector('#login').value)
	if (document.querySelector('#parol').value == 123456) {
		alert( "Добро пожаловать!" );
		window.location.href = 'index.html';
}	else {
	alert( 'Ты не достоин...' );
}	
});
	