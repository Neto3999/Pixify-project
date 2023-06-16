  //DarkMode
// selector
const themeToggleBtn = document.querySelector('.darkModeButton');

// state
const theme = localStorage.getItem('theme');

// on mount
theme && document.body.classList.add(theme);

// handlers
handleThemeToggle = () => {
    document.body.classList.toggle('darkMode');
    if (document.body.classList.contains('darkMode')) {
    localStorage.setItem('theme', 'darkMode');
    } else {
        localStorage.removeItem('theme');
    }
};

// events
themeToggleBtn.addEventListener('click', handleThemeToggle);


  //Button Toggle
// Define the data for titles, photographers, and images
const titles = ["Nature Adventures", "Faces of the World", "Wild Animals", "Innocence", "Travel Diaries", "Wild Animals 2: The Electric Boogaloo"];
const photographers = ["Jane Doe", "Jane Doe", "Jane Doe", "Andrew Smith", "Irna Towsen", "Jane Doe"];
const images = ["images/david-marcu-78A265wPiO4-unsplash 1.png", "images/edward-cisneros-_H6wpor9mjs-unsplash 1.png", "images/sid-balachandran-_9a-3NO5KJE-unsplash 1.png", "images/alvin-mahmudov-vKuEhorbvYI-unsplash 1.png", "images/jeshoots-com-mSESwdMZr-A-unsplash 1.png", "images/gwen-weustink-I3C1sSXj1i8-unsplash 1.png"];
const number = ["1 of 6", "2 of 6", "3 of 6", "4 of 6", "5 of 6", "6 of 6"]
// Get the necessary elements
const titleElement = document.getElementById("title");
const photographerElement = document.getElementById("photographer");
const imageElement = document.getElementById("image");
const numberElement = document.getElementById("number")
const previousBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");

// Initialize the index to display the first item
let currentIndex = 0;
displayItem(currentIndex);

// Function to display the item at the given index
function displayItem(index) {
  titleElement.textContent = titles[index];
  photographerElement.textContent = photographers[index];
  imageElement.src = images[index];
  numberElement.textContent = number[index]
}

// Event listener for the previous button
previous.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + titles.length) % titles.length;
  displayItem(currentIndex);
});

// Event listener for the next button
next.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % titles.length;
  displayItem(currentIndex);
});