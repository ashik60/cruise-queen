function handleTicketAmount(ticketClass, increasing) {
  const ticketsInput = getInputValue(ticketClass + "-class-tickets");
  let ticketsCount = parseInt(ticketsInput.value);
  if (!ticketsCount) ticketsCount = 0;
  let ticketsNewCount = ticketsCount;

  //Change Ticket Number
  if (!increasing && ticketsCount > 0) {
    ticketsNewCount = ticketsCount - 1;
  }
  if (increasing) {
    ticketsNewCount = ticketsCount + 1;
  }

  ticketsInput.value = ticketsNewCount;
  calculateCost();
}

function calculateCost() {
  const firstClassFare = 150;
  const economyClassFare = 100;
  const firstClasstickets = getInputValue("first-class-tickets").value;
  const economyClasstickets = getInputValue("economy-class-tickets").value;

  // Calculate Cost
  const subTotalCost = firstClasstickets * firstClassFare + economyClasstickets * economyClassFare;
  const vat = subTotalCost * 0.1;
  const totalCost = subTotalCost + vat;

  // Update cost
  setInnerText("subtotal-cost", "$" + subTotalCost);
  setInnerText("vat", "$" + vat);
  setInnerText("total-cost", "$" + totalCost);
}

// Get input from form
function getInputValue(id) {
  const formInput = document.getElementById(id);
  return formInput;
}

// Set innertext of cost and modal
function setInnerText(id, text) {
  let idSelector = document.getElementById(id);
  idSelector.innerText = text;
}

function modalText() {
  setInnerText("departure", getInputValue("departure-from").value);
  setInnerText("destination", getInputValue("destination-to").value);
  setInnerText("departure-date", getInputValue("departure-date-input").value);
  setInnerText("return-date", getInputValue("return-date-input").value);
  setInnerText("first-class-numbers", getInputValue("first-class-tickets").value);
  setInnerText("economy-class-numbers", getInputValue("economy-class-tickets").value);
  setInnerText("modal-subtotal-cost", getInputValue("subtotal-cost").innerText);
  setInnerText("modal-vat", getInputValue("vat").innerText);
  setInnerText("modal-total", getInputValue("total-cost").innerText);
}