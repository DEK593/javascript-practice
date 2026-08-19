import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

let persone = 0;

while (persone < 3) {
  const text = await rl.question("quanti anni hai?");
  let anni = parseInt(text, 10);
  persone = persone + 1;

  if (anni <= 12) {
    console.log("biglietto ridotto 5 euro");
  } else if (anni >= 65) {
    console.log("biglietto ridotto 6 euro");
  } else {
    console.log("biglietto intero 10 euro");
  }
}

rl.close();
