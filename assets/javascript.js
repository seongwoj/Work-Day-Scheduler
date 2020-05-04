// Local Storage
var saveButton = document.querySelector(".saveBtn");
var textInput = document.querySelector(".form-control");

saveButton.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(textInput.value);
    localStorage.setItem("Notes", JSON.stringify(textInput.value));
    textInput.innerHTML = localStorage.getItem("Notes");
});