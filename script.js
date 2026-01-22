function login(){
  if(password.value.length < 6){
    strengthText.innerText = "Password too short";
    return;
  }
  loginScreen.classList.add("hidden");
  chatScreen.classList.remove("hidden");
}

function sendMsg(){
  if(message.value==="") return;

  let div = document.createElement("div");
  div.className="msg user";
  div.innerText = message.value;
  chatArea.appendChild(div);

  message.value="";

  setTimeout(()=>{
    let bot = document.createElement("div");
    bot.className="msg bot";
    bot.innerText="I’m listening 💕";
    chatArea.appendChild(bot);
  },800);
}

function changeBg(type){
  chatArea.className="chat " + type;
}

