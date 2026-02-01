let 
  MEM=JSON.parse(localStorage.getItem('anamika_mem')||'[]');
function saveMemory(user,ai){
  MEM.push({user,ai,time:Date.now()});
  localStorage.setItem('anamika_mem',JSON.stringify(MEM));
}
