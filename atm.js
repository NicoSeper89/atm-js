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
        balance = balance + deposit();
        alert("Saldo actual: " + balance)
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

function deposit() {
  let depositAmount = 0;
  let correctOperation = false;
  let chosenBanknoteDenomination;
  let numberOfBills;
  const banknoteDenomination = [100, 200, 500, 1000, 2000];

  do {
    do {
      chosenBanknoteDenomination = prompt(
        "Ingrese la denominación de los billetes a depositar:\n\n" +
          "Denominaciones de billetes permitidos:\n" +
          "$100 $200 $500 $1000 $2000\n\n"
      );
      correctOperation = banknoteDenomination.some(
        (s) => parseInt(chosenBanknoteDenomination) === s
      );
      if (!correctOperation) {
        alert(
          "ERROR: Denominación" +
            chosenBanknoteDenomination +
            "Invalida. Ingrese una denonminación correcta:\n\n" +
            "Denominaciones de billetes permitidos:\n" +
            "$100 $200 $500 $1000 $2000\n\n"
        );
      }
    } while (!correctOperation);

    correctOperation = false;

    do {
      numberOfBills = prompt(
        "Ingrese la cantidad de billetes de $" +
          chosenBanknoteDenomination +
          " a depositar\n\n" + "- solo Numero > 0 -\n\n"
      );

      correctOperation = parseInt(numberOfBills) >= 1;

      if (!correctOperation) {
        alert(
          "ERROR: Cantidad " +
            depositAmount +
            " Invalida - solo Numero > 0\n\n" +
            "Ingrese una cantidad correcta\n\n"
        );
      } else {
        depositAmount =
          depositAmount + numberOfBills * chosenBanknoteDenomination;
        alert(
          "Usted registro " +
            numberOfBills +
            " billetes de : $" +
            chosenBanknoteDenomination +
            "\n\nEl monto registrado hasta el momento es: $" +
            depositAmount
        );
      }
    } while (!correctOperation);

    correctOperation = confirm("¿Quiere ingresar más billetes?");

  } while (correctOperation);

  return depositAmount;
}
