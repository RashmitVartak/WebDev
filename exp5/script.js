function displayCurrentDateTime() {
    const currentDate = new Date();
    const dateTimeElement = document.getElementById("current-date-time");
    dateTimeElement.textContent = "Current Date and Time: " + currentDate.toLocaleString();
}
window.onload = function() {
    displayCurrentDateTime();
};
function validateForm() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");

    if (nameInput.value === "" || emailInput.value === "") {
        alert("Name and email are required.");
        return false;
    }
    return true;
}
function countCharacters() {
    const summaryText = document.getElementById("summary-text").textContent;
    const characterCount = summaryText.length;
    alert("Character count: " + characterCount);
}
const hobbies = ["Playing Ukulele/Guitar", "Teaknowdo", "Football", "Singing", "Painting"];
const hobbiesList = document.getElementById("hobbies");

hobbies.forEach(function (hobby) {
    const listItem = document.createElement("li");
    listItem.textContent = hobby;
    hobbiesList.appendChild(listItem);
});
const countCharactersButton = document.getElementById("count-characters-button");
countCharactersButton.addEventListener("click", countCharacters);
