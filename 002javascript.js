import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

const nome = await rl.question("Come ti chiami? ");

console.log("Ciao", nome, "! Benvenuto in JavaScript.");

rl.close();
