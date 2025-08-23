console.log("EventListeners.js is loaded...");

const box = document.querySelector(".box");

//================= Mouse Events =====================

//================ 1. Single Click Event ================
box.addEventListener("click", function () {
  //   console.log("Box clicked!");
});

//================ 2. Double Click Event ================
box.addEventListener("dblclick", function () {
  //   console.log("Box double clicked!");
});

//================ 3. Mouse Down Event ================
box.addEventListener("mousedown", function () {
  //   console.log("Mouse button down on box!");
});

//================ 4. Mouse Up Event ================
box.addEventListener("mouseup", function () {
  //   console.log("Mouse button released on box!");
});

//================ 5. Mouse Move Event ================
box.addEventListener("mousemove", function () {
  //   console.log("Mouse moved over box!");
});

//================ 6. Mouse Over Event ================
box.addEventListener("mouseover", function () {
  //   console.log("Mouse over box!");
});

//================ 7. Mouse Out Event ================
box.addEventListener("mouseout", function () {
  console.log("Mouse out of box!");
});

//================= Keyboard Events =====================

let textField = document.getElementById("input");

//================ 1. Key Down Event ================
textField.addEventListener("keydown", function (event) {
  console.log("key pressed !");
});

//================ 2. Key Up Event ================
textField.addEventListener("keyup", function (event) {
  console.log("key released !");
});

textField.addEventListener("keydown", function (event) {
  console.log(event.key);
  if (event.key === "Enter") {
    alert("Enter key pressed!");
  }
});

textField.addEventListener("keydown", function (event) {
  let keyCode = event.keyCode;
  if ((keyCode >= 48 && keyCode <= 57) || (keyCode === 96 && keyCode <= 105)) {
    return;
  }
  event.preventDefault();
});

textField.addEventListener("keydown", function (event) {
  if (event.key === "Enter" || event.key === "Delete") {
    return;
  }
  if (/^[0-9]$/.test(event.key)) {
    return;
  }
  event.preventDefault();
});
