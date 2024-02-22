for (const seat of seats) {
  seat.addEventListener('click', seatSelectionHandler);
}

document
  .getElementById("coupon-apply")
  .addEventListener("click", couponButtonClick);
