// this js deals with getting the JSON from local storage 
//formatting it and showing it on the blog.html


// varables for testing purposes
// let userName = "micah"
// let userTitle = "cox. i kind of need to write something long to actually test the content aspect of this box. ox. i kind of need to write something long to actually test the content aspect of this box."
// let userContent = "something else"

// let testObject = {
//     userName,
//     userTitle,
//     userContent
// } 

let blogArray = JSON.parse(localStorage.getItem('postsArray'));
// console.log(blogArray.length)



// made into  
function createPost(object) {
    // console.log(JSON.parse(array[0]))
    console.log(object)
    let userObject = JSON.parse(object);

    //referencing the elemens from main and putting them in a section semantic tag

    const blogPost = document.querySelector('#blogPost');
    let contentElement = document.createElement('section')

    //creating the elements
    let p0 = document.createElement('p')
    let p1 = document.createElement('p')
    let p2 = document.createElement('p')
    blogPost.appendChild(contentElement);

    // adding elements to the page
    // contentElement.appendChild(p0).textContent= object.userName;
    // contentElement.appendChild(p1).textContent= object.userTitle;
    // contentElement.appendChild(p2).textContent= object.userContent;

    contentElement.appendChild(p0).textContent= userObject.userName;
    contentElement.appendChild(p1).textContent= userObject.userContent; // switched these two so the content  
    contentElement.appendChild(p2).textContent= userObject.userTitle; // before the title

    // adding classes 
    p0.setAttribute('class', 'title')
    p1.setAttribute('class', 'content')
    p2.setAttribute('class', 'nameUser')


}

// run the function the length of the stored array
for (let i = 0; i < blogArray.length; i++) {
    createPost(blogArray[i])
}

// createPost(testObject)
// createPost(testObject)
// createPost(testObject)