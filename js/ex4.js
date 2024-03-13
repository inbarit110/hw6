// Create and run a function to add a link
const addCollegeOfBusinessLink = () => {
  // Create a new list item for the College of Business link
  const collegeOfBusinessLink = document.createElement('li');
  collegeOfBusinessLink.innerHTML = '<a href="https://www.csulb.edu/college-of-business">College of Business</a>';
  
  const linksList = document.getElementById('links');
  
  // Insert the College of Business link before the IS link
  const isLink = document.getElementById('is');
  linksList.insertBefore(collegeOfBusinessLink, isLink);
};

addCollegeOfBusinessLink();