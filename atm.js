let option;
let balance = 10000;

do {
  option = prompt(
    " --- Cajero Automático. ---\n" +
      "Por favor, ingrese una opción:\n\n" +
      "1 - Mostrar saldo\n" +
      "2 - Depositar\n" +
      "3 - Extraer\n" +
      "4 - Salir\n"
  ); //MENÚ

  switch (
    option //Ver saldo
  ) {
    case "1":
      alert("Saldo actual: $" + balance);
      break; //Depositar dinero
    case "2":
      balance = balance + deposit();
      alert("Saldo actual: $" + balance);
      break; //Retirar dinero
    case "3":
      balance = balance - withdraw();
      alert("Saldo actual: $" + balance);
      break; //Salir
    case "4":
    case null:
      alert("hasta luego");
      break;
    default:
      alert("####OPCIÓN INCORRECTA\n\n" + "Ingrese una opción válida\n");
      break;
  }
} while (option != 4 && option != null);

//Depositar dinero en la cuenta
function deposit() {
  let depositAmount = 0;
  let correctOperation = false;
  let chosenBanknoteDenomination;
  let numberOfBills;
  const banknoteDenomination = [100, 200, 500, 1000, 2000];

  do {
    do {
      //Solicitar denominación
      chosenBanknoteDenomination = prompt(
        "Ingrese la denominación de los billetes a depositar:\n\n" +
          "Denominaciones de billetes permitidos: $100 $200 $500 $1000 $2000\n"
      ); //Validar denominación de billete ingresado
      correctOperation = banknoteDenomination.some(
        (s) => parseInt(chosenBanknoteDenomination) === s
      );
      if (!correctOperation) {
        alert(
          "ERROR: Denominación" +
            chosenBanknoteDenomination +
            "INCORRECTA\n\n. Ingrese una denominación válida:\n\n" +
            "Billetes permitidos: $100 $200 $500 $1000 $2000\n"
        );
      }
    } while (!correctOperation);

    correctOperation = false;

    do {
      //Solicitar número de billetes
      numberOfBills = prompt(
        "Ingrese la cantidad de billetes de $" +
          chosenBanknoteDenomination +
          " que quiere depositar\n" +
          "solo Número > 0\n"
      ); //Validar número de billetes ingresados

      correctOperation = parseInt(numberOfBills) >= 1;

      if (!correctOperation) {
        alert(
          "ERROR: Cantidad " +
            depositAmount +
            " incorrecta\nSolo Número > 0\n\n" +
            "Ingrese una cantidad válida\n"
        );
      } else {
        depositAmount =
          depositAmount + numberOfBills * chosenBanknoteDenomination;
        alert(
          "Usted registró " +
            numberOfBills +
            " billetes de : $" +
            chosenBanknoteDenomination +
            "\nEl depósito registrado hasta el momento es: $" +
            depositAmount +
            "\n"
        );
      }
    } while (!correctOperation);

    correctOperation = confirm("¿Quiere ingresar más billetes?");
  } while (correctOperation);

  !confirm(
    "Se depositarán $" +
      depositAmount +
      " en su cuenta\n\n¿Está de acuerdo con la operación?\n"
  ) && (depositAmount = 0);

  return depositAmount;
}

//Retirar dinero de la cuenta
function withdraw() {
  let correctOperation = false;
  let amount;

  do {
    //ingresar monto que se desea retirar
    amount = parseInt(
      prompt(
        "Ingrese la cantidad de dinero que quiere retirar.\n" +
          "Saldo actual: $" +
          balance +
          "\n"
      )
    ); //Validar monto ingresado

    if (amount >= 0 && amount % 100 == 0) {
      //Validar que exista dinero suficiente en la cuenta
      if (amount > balance) {
        amount = 0;
        correctOperation = !confirm(
          "Cantidad insuficiente en la cuenta.\n\n" +
            "¿Quiere ingresar un monto menor?\n"
        );
      } else {
        correctOperation = true;
      }
    } else {
      alert(
        "ERROR: Monto inválido.\n Debe ser un número > 0 y múltiplo de 100\n"
      );
    }
  } while (!correctOperation);

  return amount;
}
