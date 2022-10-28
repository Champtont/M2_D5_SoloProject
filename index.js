//gather the things
//for getting mem name added to list
const memName = document.getElementById("memname").value;
const addButton = document.getElementById("add");
const waitList = document.getElementById("waitinglist");
//for calculating how many teams
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
let numInput = document.getElementById("numofteams");

//display number of teams
let count = 0;
numInput.value = count;
numInput.innerText = numInput.value;

console.log(numInput);

const increaseNum = () => {
  count++;
  numInput.value = count;
  numInput.innerText = numInput.value;
};
plusButton.addEventListener("click", increaseNum);
const decreaseNum = () => {
  if (count >= 1) {
    count--;
    numInput.value = count;
    numInput.innerText = numInput.value;
  } else if (count === 0) {
    alert("can't decrease further");
    return;
  }
};
minusButton.addEventListener("click", decreaseNum);
