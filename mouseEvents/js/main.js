// Кнопка с попапом
$('.btn').click(function() {
	$('.msg').toggleClass('msg-click');
});
// Двойной клик по попапу
$('.msg').dblclick(function() {
	$('.msg').toggleClass('msg-active');
});
// Выпадающая менюха
$('.nav-block-main').mouseover(function() {
	$('.sub-block').toggleClass('sub-block-move');
});