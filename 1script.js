// Check if the browser supports the Web Speech API
if ('speechSynthesis' in window) {
    // Add event listeners to each word in the story
    document.querySelectorAll('.word').forEach(word => {
        word.addEventListener('click', () => {
            // Create a new SpeechSynthesisUtterance instance
            let utterance = new SpeechSynthesisUtterance(word.textContent);
            utterance.lang = 'en-US'; // Set language to English
            speechSynthesis.speak(utterance); // Speak the word
        });
    });
} else {
    alert("Sorry, your browser doesn't support the speech synthesis feature.");
}
