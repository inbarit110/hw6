// Function to display the sum on the HTML page
const displaySum = () => {
  // Get user input for two integers
  const firstInteger = prompt("Enter the first integer:");
  const secondInteger = prompt("Enter the second integer:");

  // Check if the input is valid integers
  if (!isNaN(firstInteger) && !isNaN(secondInteger) && Number.isInteger(parseFloat(firstInteger)) && Number.isInteger(parseFloat(secondInteger))) {
    // Calculate the sum
    const sum = parseInt(firstInteger) + parseInt(secondInteger);
    
    // Display the sum with red and bold style
    document.getElementById("content").innerHTML = `Sum: <span style="color: red; font-weight: bold;">${sum}</span>`;
  } else {
    // Display error message for invalid input
    const errorMessage = isNaN(firstInteger) || isNaN(secondInteger) ? "Alphanumeric input" : "Decimal input";
    document.getElementById("content").innerHTML = `Error - ${errorMessage}: <span style="color: red; font-weight: bold;">"${firstInteger}", "${secondInteger}"</span>`;
  }
};

// Call the function to display the sum or error message
displaySum();