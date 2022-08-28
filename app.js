const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
const greetings = [
    'Im good you little piece of love',
    'Doing good homeboi',
    'leave me alone'
];
const weather = ['Weather is fine','You need a tan'];
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.onstart = function() {
    console.log('voice is activited, you can to microphone!');
};
recognition.onresult = function(event) {
    const current = event.resultIndex;
    const transcript =  event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};
// // add the listiner to the btn
btn.addEventListener('click', () => {
    recognition.start();
});
function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = 'Saya tidak tau apa yang kamu bicarakan!';
    if (message.includes('Apa kabarmu')) {
        const finalText = 
            greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}