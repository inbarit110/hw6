// Function to generate and display the number table
const generateNumberTable = () => {
  // Get the output element
  const output = document.getElementById("output");

  // Create a table element
  const table = document.createElement("table");

  // Loop through numbers 1 to 12
  for (let i = 1; i <= 12; i++) {
    // Create a table row
    const row = document.createElement("tr");

    // Create a table data cell
    const cell = document.createElement("td");
    cell.textContent = i;

    // Add the blue background class if the number is divisible by 4
    if (i % 4 === 0) {
      cell.classList.add("blue-bg");
    }

    // Append the cell to the row
    row.appendChild(cell);

    // Append the row to the table
    table.appendChild(row);
  }

  // Append the table to the output element
  output.appendChild(table);
};

// Call the function to generate and display the number table
generateNumberTable();