function aiReply(text){
  text=text.toLowerCase();
  if(text.includes('hello')||text.includes('hi')) return 'हाय, मैं अनामिका हूँ।';
  if(text.includes('kaise')||text.includes('how')) return 'मैं ठीक हूँ। तुम कैसे हो?';
  if(text.includes('yaad')) return 'मैं हमारी बातें याद रखती हूँ।';
  return 'आगे बोलो… मैं सुन रही हूँ।';
}

function sendMsg(){
  const t=inp.value.trim(); if(!t) return;
  addMsg('You',t); inp.value='';
  const r=aiReply(t);
  addMsg('Anamika',r);
  speak(r); saveMemory(t,r);
}
