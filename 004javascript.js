import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

const età = await rl.question("Quanti anni hai? ");
let anni = parseInt(età, 10);

if (isNaN(anni)) {
  console.log("Errore: inserisci un numero valido!");
} else if (anni <= 12) {
  console.log("Biglietto ridotto 5 euro");
} else if (anni >= 65) {
  console.log("Biglietto ridotto 6 euro");
} else {
  console.log("Biglietto intero 10 euro");
}

rl.close();
