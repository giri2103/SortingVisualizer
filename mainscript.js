//-----------------------------------------------------speed controller button functionality code begins-------------------------------------------------------- //
const countValue = document.querySelector("#counter");
const increment = () => {
  //get the value from UI
  let value = parseInt(countValue.innerText);
  if (value >= 1 && value <= 9) {
    document.getElementById("decrement").disabled = false;
  }
  if (value == 10) {
    document.getElementById("increment").disabled = true;
    return;
  }
  //update the value
  value = value + 1;
  //set the value onto UI
  countValue.innerText = value;
};

const decrement = () => {
  //get the value from UI
  let value = parseInt(countValue.innerText);
  if (value == 1) {
    document.getElementById("decrement").disabled = true;
    return;
  }
  if (value < 10 && value > 1) {
    document.getElementById("increment").disabled = false;
  }
  //update the value
  value = value - 1;
  //set the value onto UI
  countValue.innerText = value;
};
//-----------------------------------------------------speed controller button functionality code ends-------------------------------------------------------- //
