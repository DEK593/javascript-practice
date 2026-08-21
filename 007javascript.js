import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { setTimeout } from "node:timers/promises";
const rl = readline.createInterface({ input, output });
let max_totaleping = 15;
let totale_ping = 0;

while (totale_ping < max_totaleping) {
  const text = await rl.question(
    "How many pings do you want to send (max 5 at round)?",
  );
  let number = Number(text);
  if (isNaN(number) || number <= 0) {
    console.log("is not a number");
    continue;
  }

  if (totale_ping + number > max_totaleping || number > 5) {
    console.log("active firewall");
    console.log("timeout");
    await setTimeout(30000);

    break;
  }
  totale_ping = totale_ping + number;
  console.log("sent", totale_ping, "ping with success");
}
rl.close();
