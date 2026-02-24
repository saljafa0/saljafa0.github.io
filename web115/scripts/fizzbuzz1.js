//fizzbuzz1 
// 1. create numbered list from 1 to 140 with each line have a themed word, start it with name submit
//
//
function makeNumList() {

    // list of themed words to use in the loop for numbers to be paired with
    const wordTheme = ["Glazed Wood", "Dragon Crafted", "Sculpture"];
    //===Loop to make the numbered list with themed words===
    for (let i = 1; i <= 140; i++) {
        const themeWord = wordTheme[i % wordTheme.length];

        //custom word for multiples of 3, 5, and both
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`${i} ${themeWord} - FizzBuzz`);

        }
    }
}







//=======HTML greeting SCRIPT STARTS HERE========
function makeGreeting() {
    // Get the values from the input fields
    const firstName = document.getElementById("first-name").value.trim();
    const middleName = document.getElementById("middle-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();

    //omit middle name if it's empty and add period after if not
    let fixedMiddleName = "";
    if (middleName !== "") {
        fixedMiddleName = middleName + ". ";
    } 

    let fullName = `${firstName} ${fixedMiddleName}${lastName}`.trim(); //combine the names into a full name and trim any extra spaces
    //shows something if first or last name is empty, otherwise it will show the greeting message with the full name
    if (firstName === "" && lastName === "") {
        fullName = "Valued Guest";
    } 

    // Create the greeting message
    const newGreeting = `Welcome to Wild Wood Furniture, ${fullName}!`;

    // Replace the content of the greeting element with the new greeting message
    document.getElementById("greeting").textContent = newGreeting;

    // call makNumList function to run the loop challenge 
    makeNumList();
}




// Prevent the form from submitting and refreshing the page and call the makeGreeting function when the form is submitted
const form = document.getElementById("name-form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    makeGreeting();
    });