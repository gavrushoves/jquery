$('input').keyup(function () {
	$('p').text('Количество букв твоего имени = ');
	$('p').append( $(this).val().length);
});
