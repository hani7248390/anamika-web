function speak(text){
  const u=new SpeechSynthesisUtterance(text);
  u.lang='hi-IN'; speechSynthesis.speak(u);
}
