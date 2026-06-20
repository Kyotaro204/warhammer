const music = document.getElementById("bgMusic");
const hover = document.getElementById("hoverSound");

function enterSite() {
    document.getElementById("intro").style.display = "none";
    music.play();
}

function playMusic() {
    music.play();
}

function pauseMusic() {
    music.pause();
}

document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        hover.currentTime = 0;
        hover.play();

    });

});

function randomQuote() {

    const quotes = [

        "For the Emperor!",
        "Only in death does duty end.",
        "Faith is our shield.",
        "The Emperor Protects.",
        "Courage and Honour.",
        "Knowledge is power. Guard it well.",
        "There is no peace amongst the stars.",
        "Hope is the first step on the road to disappointment."

    ];

    document.getElementById("quote").innerText =
        quotes[Math.floor(Math.random() * quotes.length)];

}