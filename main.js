const btnNotes = document.querySelector("#btnNotes");
const notesContainer = document.querySelector(".notes-container");
let notes = document.querySelectorAll(".input-box");

btnNotes.addEventListener("click",() => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src= "/Images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
});