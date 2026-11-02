function login(){
  if(u.value.trim() && p.value.trim()){
    localStorage.setItem('anamika_auth','1');
    location.href='chat.html';
  } else alert('Pankaj  / 1234 required');
}
