import $ from 'jquery';

export function Animation() {

	const wheel = anime({
		targets: ['#wheel', '#cabins'],
		rotate: {
			value: 360
		},
		easing: 'linear',
		duration: 20000,
		loop: true
	});


	//$('.hero_bg').on('mouseover', function(){
	//	$(this).css({'transform': 'scale(1.02)'});
	//}).on('mouseout', function(){
	//	$(this).css({'transform': 'scale(1)'});
	//}).on('mousemove', function(e){
	//	$(this).css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
	//});


}

