const vibes = [
    "... and you are amazing!",
    "... have a wonderful day!",
    "... and you've got this!",
    "... and you rock!",
];

// choose a random vibe
let vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))]

// display vibe
document.querySelector(".vibe").append(vibe)