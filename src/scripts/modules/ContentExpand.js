class ContentExpand {
	constructor() {
		this.btn = document.querySelector(".btn-expand");
		this.content = document.getElementById("content");
		this.expandContent();		
	}


	expandContent() {
		const that = this;
			this.btn.addEventListener("click", () => {
				that.content.classList.toggle("content--expanded");
			}, false);

	}

}

export default ContentExpand;



