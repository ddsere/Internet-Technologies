console.log("ElementsHandling.js is loaded...");

let newDiv = document.createElement("div");
console.log(newDiv);

newDiv.id = "alert-success";
newDiv.style.backgroundColor = "green";
newDiv.style.color = "white";
newDiv.style.padding = "12px";
newDiv.style.borderRadius = "8px";
newDiv.textContent = "Success! Your action was completed.";

const card = document.querySelector(".card");

//Append() - Inserts the element into the specific element
card.append(newDiv);

const alert = document.getElementById("alert-success");
// alert.remove();

let newDiv2 = newDiv.cloneNode(true);
// card.append(newDiv2);

let clonedDiv = newDiv.cloneNode(true);
clonedDiv.id = "alert-error";
clonedDiv.style.backgroundColor = "red";
clonedDiv.textContent = "Error! Something went wrong.";
card.append(clonedDiv);
