export function ContentEvents() {
	const $rightContent = document.querySelector(".content-right");
	const $leftContent = document.querySelector(".content-left");

	function contentExpand() {
		this.parentNode.classList.add("content--expanded");
	}

	function contentCollapse() {
		this.parentNode.classList.remove("content--expanded");
	}

	$rightContent.addEventListener("mouseover", contentExpand);
	$rightContent.addEventListener("touchstart", contentExpand);
	$rightContent.addEventListener("mouseout", contentCollapse);
	$rightContent.addEventListener("touchend", contentCollapse);

}



