const loginBox = document.getElementById("loginBox");
const chatBox = document.getElementById("chatBox");
const messages = document.getElementById("messages");

function login() {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;

  if (u === "admin" && p === "1234") {
    loginBox.style.display = "none";
    chatBox.classList.remove("hidden");
  } else {
    document.getElementById("loginError").innerText = "❌ गलत लॉगिन";
  }
}

function logout() {
  location.reload();
}

function sendMsg() {
  const input = document.getElementById("userInput");
  const text = input.value.trim();
  if (!text) return;

  addMsg(text, "user");
  input.value = "";

  setTimeout(() => {
    addMsg(generateReply(text), "ai");
  }, 600);
}

function addMsg(text, who) {
  const div = document.createElement("div");
  div.className = who === "user" ? "msg-user" : "msg-ai";
  div.innerText = text;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function generateReply(t) {
  t = t.toLowerCase();

  if (t.includes("hello") || t.includes("hi"))
    return "हाय 😊 मैं अनामिका हूँ";

  if (t.includes("love"))
    return "ये शब्द दिल को छू गए 🤍";

  if (t.includes("sad"))
    return "मैं यहीं हूँ, सब ठीक हो जाएगा 🌙";

  if (t.includes("bye"))
    return "फिर मिलेंगे 🌸 अपना ख्याल रखना";

  return "मैं सुन रही हूँ… और बताओ 🤍";
}
