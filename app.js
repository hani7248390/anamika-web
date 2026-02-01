const status = document.getElementById("status");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = "hi-IN";
recognition.continuous = true;

recognition.onresult = async (event) => {
  const text = event.results[event.results.length - 1][0].transcript;
  status.innerText = "🧠 प्रोसेसिंग: " + text;

  const res = await fetch("http://127.0.0.1:5000/ai", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text })
  });

  const data = await res.json();
  status.innerText = "🤖 " + data.reply;
};

recognition.start();
