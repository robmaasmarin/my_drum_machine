let audZ = document.getElementById("Z");

function playZ() {
  let textTodisplay = audZ.attributes.name.value;
  document.getElementById("pantalla").innerHTML = textTodisplay;
  audZ.play();}
