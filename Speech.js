document.title = "TEXT TO SPEECH";

let speech = new SpeechSynthesisUtterance();
let voices = [];
const voiceSelect = document.getElementById("voiceSelect");
const textArea = document.getElementById("text");
const speakButton = document.getElementById("speakButton");

function populateVoices() {
    voices = window.speechSynthesis.getVoices();
    voiceSelect.innerHTML = voices
        .map((voice, i) => `<option value="${i}">${voice.name} (${voice.lang})</option>`)
        .join('');
    if (voices.length > 0) {
        speech.voice = voices[0];
    }
}

window.speechSynthesis.onvoiceschanged = populateVoices;

voiceSelect.addEventListener('change', () => {
    speech.voice = voices[voiceSelect.value];
});

speakButton.addEventListener("click", () => {
    speech.text = textArea.value;
    window.speechSynthesis.speak(speech);
});

populateVoices(); // Initial population of voices
