// Function to display the current date
function displayCurrentDate() {
    const currentDate = new Date();
    const currentDateString = currentDate.toLocaleDateString('en-GB');
    document.getElementById('currentDate').innerText = `Current date: ${currentDateString}`;
}

// Call the function when the page loads
window.onload = displayCurrentDate;

function calculateDifference() {
    // Get user input for backdate
    const backdateInput = document.getElementById('backdateInput').value;
    const [day, month, year] = backdateInput.split('-').map(Number);
    const backdate = new Date(year, month - 1, day); // month is 0-indexed in JS

    // Get current date for calculation
    const currentDate = new Date();
    
    // Calculate the difference in days
    const timeDifference = currentDate - backdate;
    const daysBack = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    // Display result
    document.getElementById('result').innerText = `Backdate data for: ${backdate.toLocaleDateString('en-GB')}\nValue (days behind current date): ${daysBack}`;
}
