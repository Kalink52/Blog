
// varables for testing purposes
let nameUser = "micah"
let titleUser = "cox. i kind of need to write something long to actually test the content aspect of this box. ox. i kind of need to write something long to actually test the content aspect of this box."
let contentUser = "something else"

// made into  
function test3Times() {

    //referencing the elements from main and putting them in a section semantic tag
const blogPost = document.querySelector('#blogPost');
let contentElement = document.createElement('section')

//creating the elements
let p0 = document.createElement('p')
let p1 = document.createElement('p')
let p2 = document.createElement('p')
blogPost.appendChild(contentElement);

// adding elements to the page
contentElement.appendChild(p0).textContent= nameUser;
contentElement.appendChild(p1).textContent= titleUser;
contentElement.appendChild(p2).textContent= contentUser;

// adding classes 
p0.setAttribute('class', 'title')
p1.setAttribute('class', 'content')
p2.setAttribute('class', 'nameUser')


//styling at least me considering doing it in js and then switched to css
// contentElement.setAttribute('style', 'border')
// p0.setAttribute('style', 'font-size:25px; text-align:center;')
// p0.setAttribute('style', '')
// p0.setAttribute('style', '')
// p0.setAttribute('style', '')
// p0.setAttribute('style', '')
// p0.setAttribute('style', '')
// p0.setAttribute('style', '')
}


//testing to see if the code replicates nicely 
test3Times()
test3Times()
test3Times()







