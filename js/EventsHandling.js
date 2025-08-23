console.log("EventsHandling.js is loaded...");

const btnSave = document.getElementById("btnSave");

// 1. addEventListener() - Attaches an event handler to the specified element
btnSave.addEventListener("click", handleClick);

function handleClick() {
  console.log("Button clicked!");
}

// 2. removeEventListener() - Removes an event handler from the specified element
// btnSave.removeEventListener("click", handleClick);
