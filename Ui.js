const chatBox=document.getElementById('chatBox');
const subtitle=document.getElementById('subtitle');
function addMsg(sender,text){
  const d=document.createElement('div');
  d.className=sender==='You'?'msg user':'msg ai';
  d.innerText=text; chatBox.appendChild(d);
  chatBox.scrollTop=chatBox.scrollHeight;
  subtitle.innerText=text; subtitle.classList.add('show');
  setTimeout(()=>subtitle.classList.remove('show'),3000);
}
