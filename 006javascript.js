import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

let round = 0;

while (round < 5) {
  const text = await rl.question(
    "How many pings do you want to send (max 5 at round)?",
  );
  let number = parseInt(text, 10);
  round = round + 1;
  if (number > 5) {
    console.log("active firewall");
    break;
  } else {
    console.log("Ping sent", number);
  }
}
rl.close();
