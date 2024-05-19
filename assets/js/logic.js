// this js deals i intended to have to deal with most logic,
// but it ended up mostly dealing with light mode/dark mode


const backButton = document.querySelector('#back')
const themeSwitcher = document.querySelector('#darkMode')
const container = document.querySelector('.container');
// console.log(container)


//checks local storage for darkmode light mode
let mode = localStorage.getItem('darkmode')
console.log(mode)
if (mode == null || mode == 'dark'){
  container.setAttribute('class', 'dark');
} else {
  mode = 'light';
  container.setAttribute('class', 'light');
}

// Listen for a click event on toggle switch , coppied from hw page
// and addapted to make work
themeSwitcher.addEventListener('click', function () {
    // If mode is dark, apply light background
    if (mode === 'dark') {
      localStorage.setItem('darkmode', 'light')
      mode = 'light';
      container.setAttribute('class', 'light');
    }
    // If mode is light, apply dark background
    else {
      localStorage.setItem('darkmode', 'dark')
      mode = 'dark';
      container.setAttribute('class', 'dark');
    }
  });
  
  //if statement removes error from index page
  // for not having a back button
if (backButton != null) {

  // goes back to index when back button is click
  backButton.addEventListener('click', function() {
    var url = "./index.html"
    window.location = url;
  }
  )
} else{}