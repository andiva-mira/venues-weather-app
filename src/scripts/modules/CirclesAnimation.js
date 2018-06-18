//import $ from 'jquery';
import Snap from 'snapsvg';


export function CirclesAnimation() {
	// const s = Snap("#svg-mask");
	// let circle = s.select(".circle");


 // 	function randomRange(min, max) {
 // 		return Math.floor( Math.random() * (max - min) + min);

 // 	}
		
	// for (let i=1; i < 30; i++) {
	// 	circle.clone().attr({
	// 		stroke: '#000',
	// 		strokeMiterlimit: 10,
	// 		cx: i*5 + (Math.floor((Math.random() * 1300) + 1)),
	// 		cy: i*3 + (Math.floor((Math.random() * 710) + 1)),
	// 		r: randomRange(50, 130)
	// 	});	
	// }

	
	// circle = s.selectAll(".circle");
	

	// setTimeout(function() {
	// 	var content = document.getElementById('content');
	// 	circle.animate({r: 600}, 1500, mina.bounce, function() {
	// 		//$(".content").toggleClass("is-content-visible");
					
	// 	});
	// }, 200);

	setTimeout(function() {
		const content = document.getElementById('content');
		content.classList.toggle("is-content-visible");	
	}, 200);

}

