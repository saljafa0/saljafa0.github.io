//=======LOOP CHALLENGE STARTS HERE========
function runNumLoop(fullName) {
    // Prompt user to enter a number
    let limit = prompt(`Please enter a number count, ${fullName}: `);
    //Validate the input case for empty string,spaces, or non-numeric value 
    if (limit === "" || isNaN(limit)) {
        alert("Please enter a valid number. no spaces, letters, or empty input allowed.");
        return;
    }

    // Get the loop element which is an unordered list in the HTML where we will append the list items created in the loop
    const loopElement = document.getElementById("loop");

    // Create list items for each number from 1 to the entered number using loop and determine if it's even or odd using modulus operator
    let listItems = "";
    for (let i = 1; i <= limit; i++) {
        const evenOdd = ["even", "odd"];
        listItems += `<li>${i} Glazed Wood - The number is ${evenOdd[i % 2]}</li>`;
    }
    loopElement.innerHTML = listItems;

}


//=======LOOP CHALLENGE ENDS HERE========

//=======HTML greeting SCRIPT STARTS HERE========
function makeGreeting() {
    // Get the values from the input fields
    const firstName = document.getElementById("first-name").value.trim();
    const middleName = document.getElementById("middle-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();

    //omit middle name if it's empty
    fixedMiddleName = "";
    if (middleName === "") {
        fixedMiddleName = "";
    } else {
        fixedMiddleName = middleName + ". " ;//add a period and space after the middle initial if it's not empty
    }

    let fullName = `${firstName} ${fixedMiddleName}${lastName}`.trim(); //combine the names into a full name and trim any extra spaces
    //shows something if first or last name is empty, otherwise it will show the greeting message with the full name
    if (firstName === "" || lastName === "") {
        fullName = "Valued Guest";
    }

    // Create the greeting message
    const newGreeting = `Welcome to Wild Wood Furniture, ${fullName}!`;

    // Replace the content of the greeting element with the new greeting message
    document.getElementById("greeting").textContent = newGreeting;

    //call the loop function to run the loop challenge and give correct name to the prompt
    runNumLoop(firstName || "Valued Guest");
}
//=======HTML greeting SCRIPT ENDS HERE========



// Prevent the form from submitting and refreshing the page and call the makeGreeting function when the form is submitted
const form = document.getElementById("name-form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    makeGreeting();
    });