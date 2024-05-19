//this js deals with creating the JSON for the form on the blog page

const userName = document.querySelector('#userName');
const userTitle = document.querySelector('#userTitle');
const userContent = document.querySelector('#userContent');
const addForm = document.querySelector('#formSubmit');

// let postsArray= [localStorage.getItem('postsArray')]




// console.log(postsArray)

addForm.addEventListener('click', function () {


    //trys and get local storage array
    let postsArray =  [localStorage.getItem('postsArray')]

    // if it doesn't exists set it to an epty array
    if (postsArray[0] == null) {
        postsArray= []
        console.log(null)
    // if it does exsist parse the array and set it so we can add to it
    } else {
      postsArray= JSON.parse([localStorage.getItem('postsArray')])
    }

    //don't know if i need this
    event.preventDefault();

    // creating object and fill with user data
    const postObject = {
        // postNumber: ,
        userName: userName.value,
        userTitle: userTitle.value,
        userContent: userContent.value
    }
    //push user data to an array tthat the local data can use
    postsArray.push(JSON.stringify(postObject))

    localStorage.setItem('postsArray', JSON.stringify(postsArray));
    
    // change webpage
    var url = "./blog.html"
    window.location = url;
})
