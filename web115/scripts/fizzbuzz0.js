
function makeGreeting() {
    // Get the values from the input fields
    const firstName = document.getElementById("first-name").value;
    const middleName = document.getElementById("middle-name").value;
    const lastName = document.getElementById("last-name").value;

    //omit middle name if it's empty
    fixedMiddleName = "";
    if (middleName === "") {
        fixedMiddleName = "";
    } else {
        fixedMiddleName = middleName + " ";
    }

    // Create the greeting message
    const newGreeting = `Welcome to Wild Wood Furniture, ${firstName} ${fixedMiddleName}${lastName}!`;

    // Replace the content of the greeting element with the new greeting message
    document.getElementById("greeting").textContent = newGreeting;


    //=======LOOP CHALLENGE STARTS HERE========


    // Prompt user to enter a number
    let limit = parseInt(prompt(`Please enter a number count ${firstName}: `));
    //Validate the input
    if (limit === "" || isNaN(limit)) {
        alert("Please enter a valid number.");
        return;
    }

    // Get the loop element
    const loopElement = document.getElementById("loop");

    // Create list items for each number from 1 to the entered number using loop and determine if it's even or odd
    let listItems = "";
    for (let i = 1; i <= limit; i++) {
        let evenOdd = (i % 2 === 0) ? "even" : "odd";
        listItems += `<li>${i} Glazed Glory is ${evenOdd}</li>`;
    }
    loopElement.innerHTML = listItems;


     
    // Prevent the form from submitting and refreshing the page
    const form = document.getElementById("name-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        makeGreeting();
    });
}
