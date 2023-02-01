$('.lifetime > .btn-type-01').on('click', function(e) {
	e.preventDefault();
	var _obj = $(this).parents('tr').next('tr');
	if (_obj.css('display') === 'none') {
		_obj.slideDown();
		$(this).find('strong').text('¡ã');
	} else {
		_obj.slideUp();
		$(this).find('strong').text('¡å');

	}
});