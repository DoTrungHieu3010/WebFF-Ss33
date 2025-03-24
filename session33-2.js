let text = document.getElementById("text");
let check = document.getElementById("check");
let output = document.getElementById("amount");
check.addEventListener("click", function () {
  let amountText = text.value.length;
  output.textContent = amountText + " Ký tự";
});