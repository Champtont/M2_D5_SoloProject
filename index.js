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

const nameArr = document.querySelectorAll("p");
//add name to waiting list
const addName = () => {
  checkList();
  if (memName.value === "") {
    alert("You haven't entered a Name");
    return; //prevent user from entering empty string
  } else if (Arrays.includes(memName.value) === true) {
    alert("That member is already on list");
    clear();
    return;
  } else {
    Arrays.push(memName.value);
    newName = document.createElement("p");
    newName.classList.add("pstyle");
    newName.innerText = memName.value;
    waitList.appendChild(newName);
    clear(); // clears name field upon adding
    console.log(Arrays); //the Array is shuffling now!!!. log Array
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
  shuffleNames(Arrays);

  //make it work
  bigCard.classList.add("bcard");
  boxRight.appendChild(bigCard);
  h2.innerText = `Team ${count}`;
  bigCard.appendChild(h2);
  smallCard.classList.add("scard");
  bigCard.appendChild(smallCard);
  /*const bCard = document.querySelector(`#boxright > div:nth-child(${count})`); This is not necessary now*/
  //pushing teams into array
  const sCard = document.querySelectorAll(
    `#boxright div:nth-child(${count}) div`
  );
  teamsArr.push(sCard);
  console.log(teamsArr);
};

const removeTeam = () => {
  boxRight.removeChild(boxRight.lastElementChild);
  teamsArr.pop(`team ${count}`);
};
//Assigning Names and randomize the Array
let Arrays = [];
let teamsArr = [];

const shuffleNames = (arr) => {
  arr.sort(() => Math.random() - 0.5);
  return;
};
let index = 0;
let bindex = 0;

const assignName = () => {
  for (let i = 0; i < Arrays.length; i++) {
    console.log(Arrays[i]); //logs individual names . log name from Array
  }
  //Take Name from list and add it to a team
  const pnames = document.createElement("p");
  pnames.innerText = Arrays[bindex];
  if (bindex === Arrays.length) {
    alert("there are no more members to assign");
    return;
  }
  if (index === teamsArr.length) {
    //look here for issue
    index = 0;
    teamsArr[index][0].appendChild(pnames);
    index++;
    bindex++;
    return;
  } else {
    teamsArr[index][0].appendChild(pnames);
    index++;
    bindex++;
  }
  console.log(index);
  return;
  //need to remove name from waiting list and Array once assigned...
  //I need the waiting list
  //I need teams
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
  Arrays = [];
  teamsArr = [];
  index = 0;
  bindex = 0;
};
resetButton.addEventListener("click", clearForm);
