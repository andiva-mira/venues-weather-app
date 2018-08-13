class ResetSearch {

	constructor() {
		this.closeBtn = document.getElementById("btnClose");
		this.resetSearch();
	}

	resetSearch() {
			const that = this;
			this.closeBtn.addEventListener("click", function() {
				window.location.reload();
			});


	}

}

export default ResetSearch;