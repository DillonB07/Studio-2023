document.getElementsByClassName("new-cards").onmousemove = (e) => {
	for (const card of document.getElementsByClassName("card")) {
		const rect = card.getBoundingClientRect(),
			x = e.clientX - rect.left,
			y = e.clientY - rect.top;

		card.style.setProperty("---mouse-x", `${x}px`);
		card.style.setProperty("--mouse-y", `${y}px`);
	}
};

document.getElementsByClassName("old-cards").onmousemove = (e) => {
	for (const card of document.getElementsByClassName("card")) {
		const rect = card.getBoundingClientRect(),
			x = e.clientX - rect.left,
			y = e.clientY - rect.top;

		card.style.setProperty("--mouse-x", `${x}px`);
		card.style.setProperty("--mouse-y", `${y}px`);
	}
};

document.getElementById("contact-cards").onmousemove = (e) => {
	for (const card of document.getElementsByClassName("contact-icon")) {
		const rect = card.getBoundingClientRect(),
			x = e.clientX - rect.left,
			y = e.clientY - rect.top;

		card.style.setProperty("--mouse-x", `${x}px`);
		card.style.setProperty("--mouse-y", `${y}px`);
	}
};

// Add a event listener to detect when the user isn't on the intro section and hide the arrow image
document.addEventListener("scroll", () => {
	const introSection = document.getElementById("intro");
	const rect = introSection.getBoundingClientRect();
	const arrow = document.getElementById("scroll-arrow");
    console.log(arrow)
	if (rect.top < 0) {
		arrow.style.display = "none";
	} else {
		arrow.style.display = "block";
	}
});
