let audC = document.getElementById("C");

function playC() {
  let textTodisplay = audC.attributes.name.value;
  document.getElementById("pantalla").innerHTML = textTodisplay;
  audC.play();}
