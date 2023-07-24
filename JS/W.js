let audW = document.getElementById("W");
function playW() {
  let textTodisplay = audW.attributes.name.value;
  document.getElementById("pantalla").innerHTML = textTodisplay;
  audW.play();}
