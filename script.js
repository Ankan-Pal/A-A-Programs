function abouts(){
    var aboutherf = document.getElementById("about")
    window.location.href = "about.html"
}

function downloads(){
    var aboutherf = document.getElementById("downloads")
    window.location.href = "downloads.html"
}

function contacts(){
    var aboutherf = document.getElementById("contact")
    window.location.href = "contact.html"
}

function code(){
    var aboutherf = document.getElementById("source_code")
    window.location.href = "code.html"
}

function review(){
    var aboutherf = document.getElementById("Review")
    window.location.href = "review.html"
}

const searchInput = document.getElementById('searchinput');
const searchResults = document.getElementById('results');

searchInput.addEventListener('input', function() {
  const query = this.value.toLowerCase();

  // Clear previous results
  searchResults.innerHTML = '';

  // Generate and display new results
  if (query.length > 0) {
    const options = ['Option 1', 'Option 2', 'Option 3'];

    options.forEach(function(option) {
      if (option.toLowerCase().includes(query)) {
        const li = document.createElement('li');
        li.textContent = option;
        searchResults.appendChild(li);
      }
    });

    // Show the results
    searchResults.style.display = 'block';
  } else {
    // Hide the results if query is empty
    searchResults.style.display = 'none';
  }
});

searchInput.addEventListener('focus', function() {
  // Show the results when the input is clicked
  if (searchResults.innerHTML !== '') {
    searchResults.style.display = 'block';
  }
});

searchResults.addEventListener('click', function(event) {
  // Get the clicked result text
  const clickedOption = event.target.textContent;

  // Set the input value to the clicked result
  searchInput.value = clickedOption;

  // Redirect to Google
  window.location.href = 'https://www.google.com';
});
