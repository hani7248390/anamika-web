function startVoice() {
  const recognition = new webkitSpeechRecognition();
  recognition.lang = "hi-IN";

  recognition.onresult = function(event) {
    const text = event.results[0][0].transcript;
    document.getElementById("status").innerText = text;

    fetch("http://127.0.0.1:5000/speak", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text })
    })
    .then(res => res.json())
    .then(data => {
      const utter = new SpeechSynthesisUtterance(data.response);
      speechSynthesis.speak(utter);
    });
  };

  recognition.start();
}
