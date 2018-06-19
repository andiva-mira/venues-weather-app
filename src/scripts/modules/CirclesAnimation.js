import Snap from 'snapsvg';


export function CirclesAnimation() {
	const s = Snap("#svg-mask");
	let circle = s.select(".circle");
	const $submit = document.getElementById('button');


	function randomRange(min, max) {
		return Math.floor( Math.random() * (max - min) + min);

	}

	function cloneCircle() {
		for (let i = 1; i < 7; i++) {
			circle.clone().attr({
				stroke: '#000',
				strokeMiterlimit: 10,
				cx: i * 5 + (Math.floor((Math.random() * 1300) + 1)),
				cy: i * 3 + (Math.floor((Math.random() * 710) + 1)),
				r: randomRange(50, 130)
			});
		}
	}
		
	window.onload = function() {
		cloneCircle();
	}


	function eventHandler() {
		circle = s.selectAll(".circle");

		setTimeout(function() {
			const content = document.getElementById('content');
			circle.animate({ r: 900 }, 1500, mina.easing, function() {
				content.classList.add("is-content-visible");
			});
		}, 200);
	}


	$submit.addEventListener("click", eventHandler, false);


}

