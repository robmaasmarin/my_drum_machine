let audS = document.getElementById("S");

function playS() {
  let textTodisplay = audS.attributes.name.value;
  document.getElementById("pantalla").innerHTML = textTodisplay;
  audS.play();}
