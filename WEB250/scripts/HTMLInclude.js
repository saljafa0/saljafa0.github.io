// Sammy Al-Jafari 1/26/2026

// HTMLInclude.js
// A simple script to include HTML snippets into a webpage

//======Waits for the DOM to be fully loaded======
document.addEventListener("DOMContentLoaded", () => {
    
    //======Find all elements with the 'data-include-html' attribute======
    document.querySelectorAll("[data-include-html]").forEach(async (element) => {
        
        // =====Get the file path from the attribute======
        const filePath = element.getAttribute("data-include-html");
        
        try {
            //======Fetch the HTML content from the specified file======
            const response = await fetch(filePath);

            // if file not found, throw an error
            if (!response.ok) {
                throw new Error(`Could not load ${filePath} `);
            }
            
            //======Insert the fetched HTML content into the element======
            element.innerHTML = await response.text();

        } catch (error) {
            //======Handle errors (e.g., file not found)======
            element.innerHTML = "Page not found.";
            console.error(error);
        }
    });
;});