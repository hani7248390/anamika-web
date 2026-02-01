const status = document.getElementById("status");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const rec = new SpeechRecognition();
rec.lang = "hi-IN";
rec.continuous = true;

rec.onresult = async (e) => {
  const text = e.results[e.results.length - 1][0].transcript;
  status.innerText = "🧠 सोच रहा हूँ…";

  const res = await fetch("http://127.0.0.1:5000/ai", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ text })
  });

  const data = await res.json();
  status.innerText = "🤖 " + data.reply;
};

rec.start();
