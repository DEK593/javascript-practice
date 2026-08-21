import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });
let max_totaleping = 15;
let totale_ping = 0;

while (totale_ping < max_totaleping) {
  const text = await rl.question(
    "How many pings do you want to send (max 5 at round)?",
  );
  let number = parseInt(text, 10);
  if (isNaN(number)) {
    console.log("is not a number");
    continue;
  }

  if (totale_ping + number > max_totaleping || number > 5) {
    console.log("active firewall");
    break;
  }
  totale_ping = totale_ping + number;
  console.log("sent", totale_ping, "ping with success");
}
rl.close();
