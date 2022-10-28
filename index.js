//gather the things
//for getting mem name added to list
const memName = document.getElementById("memname");
const addButton = document.getElementById("add");
const waitList = document.getElementById("waitinglist");
const assignButton = document.getElementById("asmem");
//for calculating how many teams
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
let numInput = document.getElementById("numofteams");
//for adding/removing team cards
const boxRight = document.getElementById("boxright");
//for clearing the page
const resetButton = document.getElementById("reset");

//add name to waiting list
const addName = () => {
  const nameArr = document.querySelectorAll("p");

  for (let i = 0; i < nameArr.length; i++) {
    Arrays.push(nameArr[i].innerText);
  }
  checkList();
  if (memName.value === "") {
    alert("You haven't entered a Name");
    return; //prevent user from entering empty string
  } else if (Arrays.includes(memName.value) === true) {
    alert("That member is already on list");
  } else {
    newName = document.createElement("p");
    newName.classList.add("pstyle");
    newName.innerText = memName.value;
    waitList.appendChild(newName);
    clear(); // clears name field upon adding
    return;
  }
};

const clear = () => {
  memName.value = "";
};
//The problem is that you are seaching for an array that doesn't exist until after the assbutton is pressed
const checkList = () => {
  Arrays.includes(memName.value);
};

addButton.addEventListener("click", addName, clear);
//display number of teams
let count = 0;
numInput.value = count;
numInput.innerText = numInput.value;

console.log(numInput);

const increaseNum = () => {
  count++;
  numInput.value = count;
  numInput.innerText = numInput.value;
  addTeam();
  return;
};
plusButton.addEventListener("click", increaseNum);
const decreaseNum = () => {
  if (count >= 1) {
    count--;
    numInput.value = count;
    numInput.innerText = numInput.value;
    removeTeam();
    return;
  } else if (count === 0) {
    alert("can't decrease further");
    return;
  }
};
minusButton.addEventListener("click", decreaseNum);
//adding and removing Cards
const addTeam = () => {
  //create the things
  const bigCard = document.createElement("div");
  const h2 = document.createElement("h2");
  const smallCard = document.createElement("div");
  //make it work
  bigCard.classList.add("bcard");
  boxRight.appendChild(bigCard);
  h2.innerText = `Team ${count}`;
  bigCard.appendChild(h2);
  smallCard.classList.add("scard");
  bigCard.appendChild(smallCard);
};

const removeTeam = () => {
  boxRight.removeChild(boxRight.lastElementChild);
};
//Assigning Names and randomize the Array
const Arrays = [];
const shuffleNames = (arr) => {
  arr.sort(() => Math.random() - 0.5);
  return;
};

const assignName = () => {
  shuffleNames(Arrays);
  console.log(Arrays); //the Array is shuffling now!!!
  for (let i = 0; i < nameArr.length; i++) {
    console.log(nameArr[i].innerText); //This logs the names in order
  }
};
assignButton.addEventListener("click", assignName);
//reset button
const clearForm = () => {
  count = 0;
  numInput.value = count;
  numInput.innerText = numInput.value;
  memName.value = null;
  const listedNames = document.querySelectorAll(".pstyle");
  for (let i = 0; i < listedNames.length; i++) {
    waitList.removeChild(waitList.lastElementChild);
  }
  const bigCard = document.querySelectorAll(".bcard");
  for (let i = 0; i < bigCard.length; i++) {
    removeTeam();
  }
};
resetButton.addEventListener("click", clearForm);
