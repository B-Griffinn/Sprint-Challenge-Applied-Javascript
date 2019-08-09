// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
/* 
<div class="card">
  <div class="headline">{Headline of article}</div>
  <div class="author">
    <div class="img-container">
      <img src={url of authors image} />
    </div> 
    <span>By {authors name}</span>
  </div>
</div> 
*/
//
// Create a card for each of the articles and add the card to the DOM.

let cardContainer = document.querySelector('.cards-container');

// Get Request for lambda articles
axios.get('https://lambda-times-backend.herokuapp.com/articles')
// console.log(lambAPI)
.then((response) => {
    console.log(response);
    response.data.articles.javascript.forEach(item => {
        let newCard = new lambCards(item);
        cardContainer.appendChild(newCard);
        })
    })
    // cardContainer.appendChild(lambCards(response.data.articles))
// })

// a function that will programmatically create the above DOM component:
function lambCards(obj){
    // create elements
    let parentDiv = document.createElement('div');
    let headlineDiv = document.createElement('div');
    let authorDiv = document.createElement('div');
    let imgDiv = document.createElement('div');
    let img = document.createElement('img');
    let authNameSpan = document.createElement('span');
    
    
    //add class list
    parentDiv.classList.add('card');
    headlineDiv.classList.add('headline');
    authorDiv.classList.add('author');
    imgDiv.classList.add('img-container');
    
    //structure / append
    parentDiv.appendChild(headlineDiv);
    parentDiv.appendChild(authorDiv);
    parentDiv.appendChild(authorDiv);
            //**
    authorDiv.appendChild(imgDiv);
    imgDiv.appendChild(img);
          //**
    authorDiv.appendChild(authNameSpan);      
    
    
    //text content and img src
    headlineDiv.textContent = obj.headline

    imgDiv.src = obj.authorPhoto;
   

    authNameSpan.textContent = obj.authorName;
    
    // return
    return parentDiv;
    
    } //end lambCards comp
    



    // let cardContainer = document.querySelector('.cards-container');
    // Get Request for lambda articles
    // axios.get('https://lambda-times-backend.herokuapp.com/articles')
    // .then((response) => {
    //     console.log(response.data);
    //     response.data.articles.forEach(item => {
    //       let newArt = new lambCards(item);
    //       cardContainer.appendChild(newArt);
    //     })
    //     .catch((err => {
    //       console.log(err)
    //     }))
    // })

    // const ourAPI = axios.get('https://lambda-times-backend.herokuapp.com/topics')
// .then((response) => {
//     console.log(response)
//     response.data.topics.forEach(item => {
//         let topic = new tab(item);
//         newTopic.appendChild(topic);    
//     });
// });

// let ourLoop = theData.forEach(article => {
//     axios.get(`https://lambda-times-backend.herokuapp.com/articles/${article}`)
//     .then((response) => {
//         cardContainer.appendChild(lambCards(response.data))
//     })
    
// });