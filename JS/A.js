let audA = document.getElementById("A");

function playA() {
  let textTodisplay = audA.attributes.name.value;
  document.getElementById("pantalla").innerHTML = textTodisplay;
  audA.play();}
