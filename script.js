const invitation = document.getElementById("invitation");
const success = document.getElementById("success");
const body = document.getElementById("body");
const yay = document.getElementById("yay");
const nay = document.getElementById("nay");

let fontSize = 24;
let margin = 5;
let i = 0;

success.remove();

const nayTexts = ["Are you sure?", "100% sure?", "No takebacks?", "Final Answer?", "You'll regret it, it's gonna be fun...", "Really sure?", "I'll keep asking."];

nay.addEventListener("click", () => {
  fontSize += 40;
  margin += 5;
  yay.style.fontSize = fontSize + "px";
  yay.style.marginRight = margin + "px";
  i = (i + 1) % nayTexts.length;
  nay.textContent = nayTexts[i];
});

yay.addEventListener("click", () => {
  invitation.remove();
  body.appendChild(success);
});