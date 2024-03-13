// Function to change all paragraph elements to bold with a yellow background
const changeParagraphStyle = () => {
  // Select all paragraph elements
  const paragraphs = document.querySelectorAll('p');

  // Loop through each paragraph element
  paragraphs.forEach(paragraph => {
    // Apply CSS styles to make the text bold with a yellow background
    paragraph.style.fontWeight = 'bold';
    paragraph.style.backgroundColor = 'yellow';
  });
};

// Call the function to change paragraph styles
changeParagraphStyle();