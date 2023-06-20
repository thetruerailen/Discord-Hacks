function openPopup() {
  var popupWindow = window.open("", "_blank", "width=300,height=200");

  var menuContainer = popupWindow.document.createElement("div");
  menuContainer.style.textAlign = "center";

  var button1 = popupWindow.document.createElement("button");
  button1.textContent = "Better dark mode (on)";

  var button2 = popupWindow.document.createElement("button");
  button2.textContent = "Better dark mode (off)";

  // Append the buttons to the menuContainer
  menuContainer.appendChild(button1);
  menuContainer.appendChild(button2);

  // Append the menuContainer to the popup window's document body
  popupWindow.document.body.appendChild(menuContainer);

  button1.addEventListener("click", executeCode1);
  button2.addEventListener("click", executeCode2);

  function executeCode1() {
    console.log("Better darkmode theme! (on)");
    document.body.classList.add("theme-amoled");
  }

  function executeCode2() {
    console.log("Better darkmode theme! (off)");
    document.body.classList.remove("theme-amoled");
  }
}

// Call the openPopup function when needed
openPopup();
