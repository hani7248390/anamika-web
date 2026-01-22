function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const msg  = document.getElementById("loginMsg");

  if (user === "admin" && pass === "1234") {
    msg.innerText = "✅ Login Success";
    msg.style.color = "lightgreen";

    setTimeout(() => {
      document.getElementById("loginBox").classList.add("hidden");
      document.getElementById("chatBox").classList.remove("hidden");
    }, 800);

  } else {
    msg.innerText = "❌ Invalid Login";
    msg.style.color = "red";
  }
}

function sendMsg() {
  const input = document.getElementById("userInput");
  const chat  = document.getElementById("chatArea");

  if (input.value.trim() === "") return;

  chat.innerHTML += `<div class="msg user">You: ${input.value}</div>`;
  chat.innerHTML += `<div class="msg bot">Anamika: मैं सुन रही हूँ 💖</div>`;

  input.value = "";
  chat.scrollTop = chat.scrollHeight;
}
