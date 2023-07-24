
    function chBackcolor() {
      document.body.style.background = "#36454F";
      let cardToChange = document.getElementById("tarjeta");
      cardToChange.style.background = "black";
      cardToChange.style.border = "4px solid #CCFF00";
      let textoACambiar = document.getElementById("texto");

      textoACambiar.style.border = "4px solid #CCFF00";
      document.body.style.color = "#CCFF00";
      let miniPantalla = document.getElementById("pantalla");

      miniPantalla.style.outline = "#CCFF00 solid 10px"

      const bordeBarra = document.getElementById("bordeBarra");
      bordeBarra.style.borderBottom = "4px solid #CCFF00"
      let iconos = document.getElementById("icono");
      icono1.style.color = "#CCFF00"
      icono2.style.color = "#CCFF00"

      <!-- Buttons -->
      document.getElementById("drum pad 1").style.background = "#CCFF00";
      document.getElementById("drum pad 1").style.color = "black";
      document.getElementById("drum pad 6").style.background = "#CCFF00";
      document.getElementById("drum pad 6").style.color = "black";
      document.getElementById("drum pad 8").style.background = "#CCFF00";
      document.getElementById("drum pad 8").style.color = "black";

      document.getElementById("drum pad 2").style.background = "#00ff00";
      document.getElementById("drum pad 2").style.color = "black";
      document.getElementById("drum pad 4").style.background = "#00ff00";
      document.getElementById("drum pad 4").style.color = "black";
      document.getElementById("drum pad 9").style.background = "#00ff00";
      document.getElementById("drum pad 9").style.color = "black";

      document.getElementById("drum pad 3").style.background = "#FF1493";
      document.getElementById("drum pad 3").style.color = "black";
      document.getElementById("drum pad 5").style.background = "#FF1493";
      document.getElementById("drum pad 5").style.color = "black";
      document.getElementById("drum pad 7").style.background = "#FF1493";
      document.getElementById("drum pad 7").style.color = "black";

      <!-- Dark mode buttons -->
      document.getElementById("moon").style.color = "#CCFF00";
      document.getElementById("sun").style.color = "#CCFF00";
    };
