document.getElementById("cards").onmousemove = e => {
    for (const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    };
}


export function showcaseClick() {
    window.open('https://replit-showcase.dillonb07.repl.co', '_blank')
}

export function filesClick() {
    window.open('https://replfiles.dillonb07.studio', '_blank')
}

export function googleClick() {
    window.open('https://google.dillonb07.studio', '_blank')
}

export function dizzleClick() {
    window.open('https://dizzle.dillonb07.repl.co', '_blank')
}