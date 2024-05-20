
document.title="TEXT TO SPEECH "
let speech = new SpeechSynthesisUtterance();

let voices=[];
let voiceSelect=document.querySelector("select")
window.speechSynthesis.onvoiceschanged=()=>{
    voices =window.SpeechSynthesis.getVoices();
    speech.voice[0];//so by default it will speak in default voice/language of device
    voices.forEach((voice,i)=>(voiceSelect.options[i]=new Option(voice.name,i)));
}
document.querySelector("button").addEventListener("click",()=>{
    speech.text=document.querySelector("textarea").value
    window.speechSynthesis.speak(speech);
})

