//Complete the code for the following function
//Display text for 400 level courses
const displayText400 = () => {
  const allLiElements = document.querySelectorAll('li');

  const courses400 = Array.from(allLiElements).filter(li => li.classList.contains('400level'));

  // Array to store text content of 400 level courses
  const text400 = [];

  // Loop through each <li> element with class "400level"
  courses400.forEach(course => {
    // Get the text content of the course and push it to the array
    text400.push(course.textContent);
  });

  // Join the array elements into a single string separated by a comma
  const text = text400.join(', ');

  // Display the text content of 400 level courses
  console.log(text);
}

displayText400();