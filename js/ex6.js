const words = [{
  term: "Procrastination",
  definition: "Avoidance of doing a task that needs to be accomplished"
}, {
  term: "Tautology",
  definition: "logical argument constructed in such a way that it is logically irrefutable"
}, {
  term: "Oxymoron",
  definition: "figure of speech that juxtaposes elements that appear to be contradictory"
}];

// Function to display the mini-dictionary
const displayDictionary = () => {
  // Get the content element
  const content = document.getElementById("content");

  // Create a definition list
  const dl = document.createElement("dl");

  // Loop through the words array and create dt (term) and dd (definition) elements for each word
  words.forEach(word => {
    const dt = document.createElement("dt");
    dt.innerHTML = `<strong>${word.term}</strong>`;
    const dd = document.createElement("dd");
    dd.textContent = word.definition;
    dl.appendChild(dt);
    dl.appendChild(dd);
  });

  // Append the definition list to the content element
  content.appendChild(dl);
};

// Call the function to display the mini-dictionary
displayDictionary();