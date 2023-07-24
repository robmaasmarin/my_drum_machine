let audD = document.getElementById("D");

function playD() {
  let textTodisplay = audD.attributes.name.value;
  document.getElementById("pantalla").innerHTML = textTodisplay;
  audD.play();}
