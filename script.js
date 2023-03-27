console.log("Adding event listeners");
console.log(document.getElementById("intro"));
console.log(document.getElementById("scroll-arrow"));

const container = document.querySelector(".container");

document.addEventListener("DOMContentLoaded", () => {
  container.addEventListener("scroll", (event) => {
    const introSection = document.getElementById("intro");
    const arrow = document.getElementById("scroll-arrow");
    console.info(introSection, arrow);

    const rect = introSection.getBoundingClientRect();
    console.info(rect);
    if (rect.top < 0) {
      arrow.style.display = "none";
    } else {
      arrow.style.display = "block";
    }
  });

  document.querySelector(".new-cards").addEventListener("mousemove", (e) => {
    document.querySelectorAll(".card").forEach((card) => {
      const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

      card.style.setProperty("---mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  });

  document.querySelector(".old-cards").addEventListener("mousemove", (e) => {
    document.querySelectorAll(".card").forEach((card) => {
      const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

      card.style.setProperty("---mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  });

  document.querySelector(".conmtact-cards").addEventListener("mousemove", (e) => {
    document.querySelectorAll(".contact-icon").forEach((card) => {
      const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

      card.style.setProperty("---mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  });

  // Add a event listener to detect when the user isn't on the intro section and hide the arrow image
});
