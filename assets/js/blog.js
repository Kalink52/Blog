// this js deals with getting the JSON from local storage 
//formatting it and showing it on the blog.html


// varables for testing purposes
// let nameUser = "micah"
// let titleUser = "cox. i kind of need to write something long to actually test the content aspect of this box. ox. i kind of need to write something long to actually test the content aspect of this box."
// let contentUser = "something else"

let blogArray = JSON.parse(localStorage.getItem('postsArray'));
// let blogObject = JSON.parse(blogArray);
console.log(blogArray.length)



// made into  
function test3Times(object) {
    // console.log(JSON.parse(array[0]))
    console.log(object)
    let userObject = JSON.parse(object);

    

    //referencing the elements from main and putting them in a section semantic tag
const blogPost = document.querySelector('#blogPost');
let contentElement = document.createElement('section')

//creating the elements
let p0 = document.createElement('p')
let p1 = document.createElement('p')
let p2 = document.createElement('p')
blogPost.appendChild(contentElement);

// adding elements to the page
contentElement.appendChild(p0).textContent= userObject.username;
contentElement.appendChild(p1).textContent= userObject.userTitle;
contentElement.appendChild(p2).textContent= userObject.userContent;

// adding classes 
p0.setAttribute('class', 'title')
p1.setAttribute('class', 'content')
p2.setAttribute('class', 'nameUser')


}

// run the function the length of the stored array
for (let i = 0; i < blogArray.length; i++) {
    test3Times(blogArray[i])
}

