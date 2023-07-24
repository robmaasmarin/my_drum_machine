
    function normalColor() {
      document.body.style.background = "#4CAF50";
      let cardToChange = document.getElementById("tarjeta");
      cardToChange.style.background = "white";
      cardToChange.style.border = "2px solid black";
      let textoACambiar = document.getElementById("texto");

      textoACambiar.style.border = "2px solid black";
      document.body.style.color = "black";

      let miniPantalla = document.getElementById("pantalla");
      miniPantalla.style.outline = "#4CAF50 solid 10px"

      const bordeBarra = document.getElementById("bordeBarra");
      bordeBarra.style.borderBottom = "2px solid black"

      let iconos = document.getElementById("icono");
      icono1.style.color = "#4CAF50"
      icono2.style.color = "#4CAF50"

      <!-- Buttons -->
      document.getElementById("drum pad 1").style.background = "#dc3545";
      document.getElementById("drum pad 1").style.color = "white";
      document.getElementById("drum pad 6").style.background = "#dc3545";
      document.getElementById("drum pad 6").style.color = "white";
      document.getElementById("drum pad 8").style.background = "#dc3545";
      document.getElementById("drum pad 8").style.color = "white";

      document.getElementById("drum pad 2").style.background = "#ffc107";
      document.getElementById("drum pad 2").style.color = "black";
      document.getElementById("drum pad 4").style.background = "#ffc107";
      document.getElementById("drum pad 4").style.color = "black";
      document.getElementById("drum pad 9").style.background = "#ffc107";
      document.getElementById("drum pad 9").style.color = "black";

      document.getElementById("drum pad 3").style.background = "#198754";
      document.getElementById("drum pad 3").style.color = "white";
      document.getElementById("drum pad 5").style.background = "#198754";
      document.getElementById("drum pad 5").style.color = "white";
      document.getElementById("drum pad 7").style.background = "#198754";
      document.getElementById("drum pad 7").style.color = "white";

      <!-- Dark mode buttons -->
      document.getElementById("moon").style.color = "black";
      document.getElementById("sun").style.color = "black";
    };
