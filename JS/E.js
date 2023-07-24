let audE = document.getElementById("E");
function playE() {
  let textTodisplay = audE.attributes.name.value;
  document.getElementById("pantalla").innerHTML = textTodisplay;
  audE.play();}
