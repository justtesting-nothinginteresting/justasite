let knopochka;
knopochka = document.querySelector('#knopka');
knopochka.addEventListener('click', function() {
	console.log(document.querySelector('#parol').value) 
	console.log(document.querySelector('#login').value)
	if (document.querySelector('#parol').value == 123456) {
		alert( "Добро пожаловать!" );
		window.location.href = 'file:///C:/Users/%D0%92%D0%B5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/progs/calories%20counter/index.html';
}	else {
	alert( 'Ты не достоин...' );
}	
});
	