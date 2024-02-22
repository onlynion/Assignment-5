const seats = document.getElementsByClassName('seat');
const seatLeft = document.getElementById('seat-left');
const table = document.getElementById('table');
const seatCount = document.getElementById('seat-count');
const totalPriceFinal = document.getElementById('total-price');
const grandTotalPrice = document.getElementById('grand-total');
const couponButton = document.getElementById('coupon-apply');
const couponCodeText = document.getElementById('coupon-code');

let selectedSeat = 0;
let totalSeat = 8;
let totalPrice = 0;
let grandTotal = 0;
let discount = 0;

function ticketingFunctionality(seat){
  seat.style.backgroundColor = '#1DD100';  

  selectedSeat++;
  totalSeat--;
  totalPrice+=550;
  grandTotal+=550;
  grandTotalPrice.innerText = grandTotal.toString();
  totalPriceFinal.innerText = totalPrice.toString();
  seatLeft.innerText = totalSeat.toString();
  seatCount.innerText = selectedSeat.toString();

  const tr = document.createElement('tr');
  const td1 = document.createElement('td');
  const td2 = document.createElement('td');
  const td3 = document.createElement('td');

  td1.innerText = seat.innerText;
  td2.innerText = 'Economy';
  td3.innerText = '550';

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  table.appendChild(tr);

  seat.removeEventListener('click', seatSelectionHandler);
}

function seatSelectionHandler(){
  if(selectedSeat >= 4){
    
    alert('You can not select more than 4 seats')
    return;
  }

  const seat = this;
  ticketingFunctionality(seat);
}


function couponButtonClick(apply){
  if(couponCodeText.value === 'NEW15'){
    discount = (totalPrice *15)/100;
  }

  else if(couponCodeText.value === 'Couple 20'){
    discount = (totalPrice *20)/100;
  }

  else {
    discount = 0;
    alert('Invalid Coupon');
  }

  couponCodeText.value = '';
  grandTotal-=discount;
  grandTotalPrice.innerText = grandTotal.toString();
}

