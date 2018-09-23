$('p').css({
	color: 'red'
});

$('#block').replaceWith('<h3>Здесь было что-то другое</h3>');

$('.block-2').append(' -Текст добавлен динамически').css({
	color: 'green'
});

$('body *').prepend('---');
