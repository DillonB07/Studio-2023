console.log("Adding event listeners");
console.log(document.getElementById("intro"));
console.log(document.getElementById("scroll-arrow"));

document.addEventListener("DOMContentLoaded", () => {
  console.log("Adding event listeners");
  console.log("intro", document.getElementById("intro"));
  console.log("arrow", document.getElementById("scroll-arrow"));

  document.addEventListener("scroll", (event) => {
    if (event.target === introSection || event.target === arrow) {
      const rect = introSection.getBoundingClientRect();
      if (rect.top < 0) {
        arrow.style.display = "none";
      } else {
        arrow.style.display = "block";
      }
    }
  });
  
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
});
