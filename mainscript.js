const countValue = document.querySelector("#counter");
// Default input for delayexecution function (260ms)
let delay = 1000;
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

  delay = delay / value;

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
  delay = delay * value;
  value = value - 1;

  //set the value onto UI
  countValue.innerText = value;
};

// ******************************************************************************************************************************************************************************
// ******************************************************************************************************************************************************************************
// ******************************************************************************************************************************************************************************
// *************************************                                  Main-Mastermind Function                                           ************************************
// ******************************************************************************************************************************************************************************
// ******************************************************************************************************************************************************************************

// swap function util for sorting algorithms takes input of 2 DOM elements with .style.height feature
function swap(el1, el2) {
  let temp = el1.style.height;
  delayexecution(200);
  el1.style.height = el2.style.height;
  el2.style.height = temp;
}

// Disables sorting buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it

function disableSortingDropdown() {
  document.querySelector("#algorithmsDropdown").disabled = true;
}

// Enables sorting buttons used in conjunction with disable
function enableSortingDropdown() {
  document.querySelector("#algorithmsDropdown").disabled = false;
}

function disableShuffle() {
  document.querySelector("#randomizeArrayBtn").disabled = true;
}

// Enables sorting buttons used in conjunction with disable
function enableShuffle() {
  document.querySelector("#randomizeArrayBtn").disabled = false;
}

// Disables size of array dropdown used in conjunction with enable, so that we can disable during sorting and enable after it
function disableArraySizeDropdown() {
  document.querySelector("#ArraysizeDropdown").disabled = true;
}

// Enables newArray buttons used in conjunction with disable
function enableArraySizeDropdown() {
  document.querySelector("#ArraysizeDropdown").disabled = false;
}

// Used in async function so that we can so animations of sorting, takes input time in ms (1000 = 1s)
function delayexecution(milisec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, milisec);
  });
}

// Selecting size dropdown from DOM
let arraySize = document.querySelector("#ArraysizeDropdown");

// Event listener to update the bars on the UI
arraySize.addEventListener("input", function () {
  //  deleteChild();
  createNewArray(parseInt(arraySize.value));
});

// Creating array to store randomly generated numbers
let array = [];

// Call to display bars right when you visit the site
createNewArray();

// To create new array input size of array
function createNewArray(noOfBars = 5) {
  // calling helper function to delete old bars from dom

  deleteChild();

  // creating an array of random numbers
  array = [];
  for (let i = 0; i < noOfBars; i++) {
    array.push(Math.floor(Math.random() * 170) + 1);
  }

  // select the div #bars element
  const bars = document.querySelector(".arraycontainer");

  // create multiple element div using loop and adding class 'bar'
  for (let i = 0; i < noOfBars; i++) {
    const bar = document.createElement("div");
    bar.style.height = `${array[i] * 2}px`;
    bar.classList.add("bar");
    bar.classList.add("item");
    bar.classList.add(`barNo${i}`);
    bar.style.width = "90%";
    bars.appendChild(bar);
  }
}

// Helper function to delete all the previous bars so that new can be added
function deleteChild() {
  const bar = document.querySelector(".arraycontainer");
  bar.innerHTML = "";
}

// Selecting newarray button from DOM and adding eventlistener
const newArray = document.querySelector("#randomizeArrayBtn");
newArray.addEventListener("click", function () {
  enableSortingDropdown();
  enableArraySizeDropdown();
  createNewArray(arraySize.value);
});

// ------------------------------------------

const bubbleSrtTheory = document.getElementById("bubblesorttheory").classList;

function bubblesorttheoryinvis() {
  bubbleSrtTheory.add("invis");
}

function bubblesorttheoryvis() {
  bubbleSrtTheory.remove("invis");
}

// ------------------------------------------

const selectionSrtTheory = document.getElementById(
  "selectionsorttheory"
).classList;

function selectionsorttheoryinvis() {
  selectionSrtTheory.add("invis");
}

function selectionsorttheoryvis() {
  selectionSrtTheory.remove("invis");
}

// ------------------------------------------

const insertionSrtTheory = document.getElementById(
  "insertionsorttheory"
).classList;

function insertionsorttheoryinvis() {
  insertionSrtTheory.add("invis");
}

function insertionsorttheoryvis() {
  insertionSrtTheory.remove("invis");
}

// ------------------------------------------

const mergeSrtTheory = document.getElementById("mergesorttheory").classList;

function mergesorttheoryinvis() {
  mergeSrtTheory.add("invis");
}

function mergesorttheoryvis() {
  mergeSrtTheory.remove("invis");
}

// ------------------------------------------

const quickSrtTheory = document.getElementById("quicksorttheory").classList;

function quicksorttheoryinvis() {
  quickSrtTheory.add("invis");
}

function quicksorttheoryvis() {
  quickSrtTheory.remove("invis");
}

// -------------------------------------------

bubblesorttheoryinvis();
mergesorttheoryinvis();
insertionsorttheoryinvis();
quicksorttheoryinvis();
// ------------------------------------------------------------------ //

function play() {
  let AlgorithmSelected = 1;
  let selectedalgo = document.querySelector("#algorithmsDropdown");
  AlgorithmSelected = selectedalgo.value;

  selectedalgo.addEventListener("input", function () {
    AlgorithmSelected = selectedalgo.value;
  });

  if (AlgorithmSelected == 1) {
    selectionSortcall();
    return;
  } else if (AlgorithmSelected == 2) {
    bubbleSortcall();
    return;
  } else if (AlgorithmSelected == 3) {
    insertionSortcall();
    return;
  } else if (AlgorithmSelected == 5) {
    quickSortcall();
    return;
  } else if (AlgorithmSelected == 4) {
    mergeSortcall();
    return;
  }
}
// ------------------------------------------------------------------ //

//-------------------------- Selection Sort Algorithm -------------------------------//
async function selection() {
  const ele = document.querySelectorAll(".bar");
  for (let i = 0; i < ele.length; i++) {
    let min_index = i;
    ele[i].style.background = "		#FFD700	";
    for (let j = i + 1; j < ele.length; j++) {
      ele[j].style.background = "#FF6347";

      await delayexecution(delay);
      if (
        parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)
      ) {
        if (min_index !== i) {
          ele[min_index].style.background = "white";
        }
        min_index = j;
      } else {
        ele[j].style.background = "white";
      }
    }
    await delayexecution(delay);
    ele[min_index].style.background = "#FF6347";
    ele[i].style.background = "#FF6347";
    swap(ele[min_index], ele[i]);
    // change the min element index back to normal as it is swapped
    ele[min_index].style.background = "white";
    // change the sorted elements color to #00FF7F
    ele[i].style.background = "#00FF7F";
  }
}

async function selectionSortcall() {
  bubblesorttheoryinvis();
  mergesorttheoryinvis();
  insertionsorttheoryinvis();
  quicksorttheoryinvis();
  selectionsorttheoryvis();

  disableSortingDropdown();
  disableShuffle();
  disableArraySizeDropdown();
  await selection();
  enableSortingDropdown();
  enableArraySizeDropdown();
  enableShuffle();
}

//----------------------------------------------------------Selection Sort Algorithm Ends-------------------------------------------------------------//

//------------------------------------------------------------- Bubble Sort Algorithm ---------------------------------------------------------------//
async function bubble() {
  const ele = document.querySelectorAll(".bar");
  for (let i = 0; i < ele.length - 1; i++) {
    for (let j = 0; j < ele.length - i - 1; j++) {
      ele[j].style.background = "		#FFD700	";
      ele[j + 1].style.background = "		#FFD700	";
      if (parseInt(ele[j].style.height) > parseInt(ele[j + 1].style.height)) {
        ele[j].style.background = "#FF6347";
        ele[j + 1].style.background = "#FF6347";
        await delayexecution(delay);
        swap(ele[j], ele[j + 1]);
      }
      ele[j].style.background = "white";
      ele[j + 1].style.background = "white";
    }
    ele[ele.length - 1 - i].style.background = "#00FF7F";
  }
  ele[0].style.background = "#00FF7F";
}

async function bubbleSortcall() {
  bubblesorttheoryvis();
  mergesorttheoryinvis();
  insertionsorttheoryinvis();
  quicksorttheoryinvis();
  selectionsorttheoryinvis();

  disableSortingDropdown();
  disableShuffle();
  disableArraySizeDropdown();
  await bubble();
  enableSortingDropdown();
  enableArraySizeDropdown();
  enableShuffle();
}

//------------------------------------------------------------- Bubble Sort Algorithm Ends---------------------------------------------------------------//

//--------------------------------------------------------- Insertion Sort Algorithm Starts---------------------------------------------------------------//

async function insertion() {
  const ele = document.querySelectorAll(".bar");
  // color
  ele[0].style.background = "#00FF7F";
  for (let i = 1; i < ele.length; i++) {
    let j = i - 1;
    let key = ele[i].style.height;
    // color
    ele[i].style.background = "		#FFD700	";

    await delayexecution(delay);

    while (j >= 0 && parseInt(ele[j].style.height) > parseInt(key)) {
      // color
      ele[j].style.background = "		#FFD700	";
      ele[j + 1].style.height = ele[j].style.height;
      j--;

      await delayexecution(delay);

      // color
      for (let k = i; k >= 0; k--) {
        ele[k].style.background = "#00FF7F";
      }
    }
    ele[j + 1].style.height = key;
    // color
    ele[i].style.background = "#00FF7F";
  }
}

async function insertionSortcall() {
  bubblesorttheoryinvis();
  mergesorttheoryinvis();
  insertionsorttheoryvis();
  quicksorttheoryinvis();
  selectionsorttheoryinvis();

  disableSortingDropdown();
  disableShuffle();
  disableArraySizeDropdown();
  await insertion();
  enableSortingDropdown();
  enableArraySizeDropdown();
  enableShuffle();
}

//------------------------------------------------------------- Insertion Sort Algorithm Ends-------------------------------------------------------------//

//--------------------------------------------------------- Quick Sort Algorithm Starts---------------------------------------------------------------//
async function partitionLomuto(ele, l, r) {
  let i = l - 1;
  // color pivot element
  ele[r].style.background = "	#00FFFF";
  for (let j = l; j <= r - 1; j++) {
    // color current element
    ele[j].style.background = "yellow";
    // pauseChamp
    await delayexecution(delay);

    if (parseInt(ele[j].style.height) < parseInt(ele[r].style.height)) {
      i++;

      ele[i].style.background = "#FF6347";
      ele[j].style.background = "#FF6347";

      swap(ele[i], ele[j]);
      // color
      ele[i].style.background = "orange";
      if (i != j) ele[j].style.background = "orange";
      // pauseChamp
      await delayexecution(delay);
    } else {
      // color if not less than pivot
      ele[j].style.background = "pink";
    }
  }
  i++;
  // pauseChamp
  await delayexecution(delay);
  ele[i].style.background = "#FF6347";
  ele[j].style.background = "#FF6347";
  swap(ele[i], ele[r]); // pivot height one

  // color
  ele[r].style.background = "pink";
  ele[i].style.background = "#00FF7F";

  // pauseChamp
  await delayexecution(delay);

  // color
  for (let k = 0; k < ele.length; k++) {
    if (ele[k].style.background != "#00FF7F") ele[k].style.background = "white";
  }

  return i;
}

async function quickSort(ele, l, r) {
  if (l < r) {
    let pivot_index = await partitionLomuto(ele, l, r);
    await quickSort(ele, l, pivot_index - 1);
    await quickSort(ele, pivot_index + 1, r);
  } else {
    if (l >= 0 && r >= 0 && l < ele.length && r < ele.length) {
      ele[r].style.background = "#00FF7F";
      ele[l].style.background = "#00FF7F";
    }
  }
}

async function quickSortcall() {
  bubblesorttheoryinvis();
  mergesorttheoryinvis();
  insertionsorttheoryinvis();
  quicksorttheoryvis();
  selectionsorttheoryinvis();

  disableSortingDropdown();
  disableShuffle();
  disableArraySizeDropdown();
  let ele = document.querySelectorAll(".bar");
  let l = 0;
  let r = ele.length - 1;
  await quickSort(ele, l, r);
  enableSortingDropdown();
  enableArraySizeDropdown();
  enableShuffle();
}

//------------------------------------------------------------- Quick Sort Algorithm Ends-------------------------------------------------------------//

//--------------------------------------------------------- Merge Sort Algorithm Starts---------------------------------------------------------------//

async function merge(ele, low, mid, high) {
  const n1 = mid - low + 1;
  const n2 = high - mid;

  let left = new Array(n1);
  let right = new Array(n2);

  for (let i = 0; i < n1; i++) {
    await delayexecution(delay);

    // color
    ele[low + i].style.background = "orange";
    left[i] = ele[low + i].style.height;
  }
  for (let i = 0; i < n2; i++) {
    await delayexecution(delay);

    // color
    ele[mid + 1 + i].style.background = "yellow";
    right[i] = ele[mid + 1 + i].style.height;
  }
  await delayexecution(delay);
  let i = 0,
    j = 0,
    k = low;
  while (i < n1 && j < n2) {
    await delayexecution(delay);

    // To add color for which two r being compa#FF6347 for merging

    if (parseInt(left[i]) <= parseInt(right[j])) {
      // color
      if (n1 + n2 === ele.length) {
        ele[k].style.background = "#00FF7F";
      } else {
        ele[k].style.background = "#00FF7F";
      }

      ele[k].style.height = left[i];
      i++;
      k++;
    } else {
      // color
      if (n1 + n2 === ele.length) {
        ele[k].style.background = "#00FF7F";
      } else {
        ele[k].style.background = "#00FF7F";
      }
      ele[k].style.height = right[j];
      j++;
      k++;
    }
  }
  while (i < n1) {
    await delayexecution(delay);

    // color
    if (n1 + n2 === ele.length) {
      ele[k].style.background = "#00FF7F";
    } else {
      ele[k].style.background = "#00FF7F";
    }
    ele[k].style.height = left[i];
    i++;
    k++;
  }
  while (j < n2) {
    await delayexecution(delay);

    // color
    if (n1 + n2 === ele.length) {
      ele[k].style.background = "#00FF7F";
    } else {
      ele[k].style.background = "#00FF7F";
    }
    ele[k].style.height = right[j];
    j++;
    k++;
  }
}

async function mergeSort(ele, l, r) {
  if (l >= r) {
    return;
  }
  const m = l + Math.floor((r - l) / 2);

  await mergeSort(ele, l, m);
  await mergeSort(ele, m + 1, r);
  await merge(ele, l, m, r);
}

async function mergeSortcall() {
  bubblesorttheoryinvis();
  mergesorttheoryvis();
  insertionsorttheoryinvis();
  quicksorttheoryinvis();
  selectionsorttheoryinvis();
  let ele = document.querySelectorAll(".bar");
  let l = 0;
  let r = parseInt(ele.length) - 1;
  disableSortingDropdown();
  disableShuffle();
  disableArraySizeDropdown();
  await mergeSort(ele, l, r);
  enableSortingDropdown();
  enableArraySizeDropdown();
  enableShuffle();
}

function refresh() {
  location.reload();
}
//------------------------------------------------------------- Merge Sort Algorithm Ends-------------------------------------------------------------//
