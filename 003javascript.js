import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

const pizza = await rl.question("Che pizza vuole? ");
console.log("Ok,", pizza, "!");

const text = await rl.question("Ok, quante ne vuole? ");

let numeroPizze = parseInt(text, 10);

if (numeroPizze > 5) {
  console.log("Ordine grande! Sconto applicato.");
} else if (numeroPizze < 5) {
  console.log("Ordine ricevuto!");
} else {
  console.log("Perfetto, esattamente 5 pizze.");
}

rl.close();
