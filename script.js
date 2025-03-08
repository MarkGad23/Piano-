
Tone.start();
const synth = new Tone.Synth().toDestination();

function playNote(note) {
    synth.triggerAttackRelease(`${note}4`, "8n");


    document.getElementById(note).style.background = "#33d6a6";

   
    setTimeout(() => {
        document.getElementById(note).style.background = "white";
    }, 200);
}


document.addEventListener("keydown", function (e) {
    let keyMap = {
        "s": "C",
        "d": "D",
        "f": "E",
        "g": "F",
        "h": "G",
        "j": "A",
        "k": "B"
    };

    let note = keyMap[e.key.toLowerCase()]; 
    if (note) {
        playNote(note);
    }
});
