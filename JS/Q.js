let aud = document.getElementById("Q");
function playAud() {
  let textTodisplay = aud.attributes.name.value;
  document.getElementById("pantalla").innerHTML = textTodisplay;
  aud.play();
  



}
