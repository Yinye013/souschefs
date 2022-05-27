const nav = document.querySelector(".nav");
const btn = document.querySelector(".span");
const menu = document.querySelector("#menu");

btn.addEventListener("click", () => {
	// if (nav.classList.contains("open")) {
	// 	nav.classList.remove("open");
	// } else {
	// 	nav.classList.add("open");
	// }
	nav.classList.toggle("open");

	if (menu.classList.contains("hidden")) {
		menu.classList.remove("hidden");
	} else {
		menu.classList.add("hidden");
	}
});
