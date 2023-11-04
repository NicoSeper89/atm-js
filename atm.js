let option;
let balance = 0;

do {
  option = prompt(
    " --- Cajero Automático. ---\n\n" +
      "Por favor, ingrese una opcion:\n\n" +
      "1 - Mostrar saldo\n" +
      "2- Depositar\n" +
      "3- Extraer\n" +
      "4- Salir\n"
  );

  switch (option) {
    case "1":
      alert("Saldo actual: " + balance);
      break;
    case "2":
      alert("depositar dinero")
      break;
    case "3":
      alert("retirar dinero");
      break;
    case "4":
      alert("hasta luego");
      break;
    default:
      alert("####OPCION INCORRECTA" + "Ingrese una opción válida");
      break;
  }
} while (option != 4);

