let audX = document.getElementById("X");

function playX() {
  let textTodisplay = audX.attributes.name.value;
  document.getElementById("pantalla").innerHTML = textTodisplay;
  audX.play();}
