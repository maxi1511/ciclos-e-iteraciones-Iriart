let entrada = prompt("Ingrese un varietal de vino").toUpperCase();

while(entrada != "ESC") {

   switch (entrada) {
      case "MALBEC":
         alert("Vino Malbec");
         break;

         case "CABERNET":
         alert("Vino Cabernet");
         break;

         case "TORRONTES":
         alert("Vino Torrontes");
         break;
   
      default:
         alert("Vino incorrecto");
         break;
   }
   entrada = prompt("Ingrese otro varietal de vino").toUpperCase();
}