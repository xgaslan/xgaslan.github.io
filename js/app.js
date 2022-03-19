const allSections = document.querySelectorAll(".main-content");
const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");

function PageTransitions() {
	// Button click active class
	const countOfButtons = sectBtn.length;
	for (let index = 0; index < countOfButtons; index++) {
		sectBtn[index].addEventListener("click", function () {
			let currentBtn = document.querySelectorAll(".active-btn");
			currentBtn[0].className = currentBtn[0].className.replace(
				"active-btn",
				"",
			);
			this.className += " active-btn";
		});
	}

	// Sections active class
	allSections.forEach((item) => {
		item.addEventListener("click", function (event) {
			const id = event.target.dataset.id;
			if (id) {
				//Remove selected from the other btns
				sectBtns.forEach((btn) => {
					btn.classList.remove("active");
				});
				event.target.classList.add("active");
				// Hide other sections
				sections.forEach((section) => {
					section.classList.remove("active");
				});

				const element = document.getElementById(id);
				element.classList.add("active");
			}
		});
	});

	//Toggle theme
	const themeBtn = document.querySelector(".theme-btn");
	themeBtn.addEventListener("click", () => {
		let element = document.body;
		element.classList.toggle("light-mode");
	});
}

PageTransitions();
