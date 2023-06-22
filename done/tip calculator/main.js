const billEl = document.getElementById('bill');
const tipEl = document.getElementById('tip');
const totalEl = document.getElementById('result');
const btnEl = document.getElementById('btn');

btnEl.addEventListener('click', () => {
  calculateTip();
});

function calculateTip() {
  const bill = Number(billEl.value);
  const tip = (Number(tipEl.value) / 100) * bill;
  const total = bill + tip;
  totalEl.innerHTML = `Total: $${total.toFixed(2)}`;
}
