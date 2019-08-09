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


// GET data from provided server
let articleAPI = axios.get('https://lambda-times-backend.herokuapp.com/articles');

// SELECT the class I need to append everything to
let cardContainer = document.querySelector('.cards-container');


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
            //**
    authorDiv.appendChild(imgDiv);
    authorDiv.appendChild(authNameSpan);
          //**
    authorDiv.appendChild(authNameSpan);   
    imgDiv.appendChild(img);
    
    //text content and img src
    headlineDiv.textContent = `${obj.headline}`;

    img.setAttribute('src', `${obj.authorPhoto}`);
    // imgDiv.setAttribute('alt', 'authors picture');
   
    authNameSpan.textContent = `By ${obj.authorName}`;
    
    // return
    return parentDiv;
    
    } //end lambCards comp

    //loop through our api to find each structure
    articleAPI.then(response => {
        //js structure
        const js = response.data.articles.javascript;
        console.log(js);
        js.forEach(article => {
            cardContainer.appendChild(lambCards(article));
        }) //end of js structure

        //bootstrap structure
        const boot = response.data.articles.bootstrap;
        console.log(boot);
        boot.forEach(article => {
            cardContainer.appendChild(lambCards(article)); 
        })

        // technology structure
        const technology = response.data.articles.technology;
        console.log(technology);
        boot.forEach(article => {
            cardContainer.appendChild(lambCards(article)); 
        })

        //jquery structure
        const jquery = response.data.articles.jquery;
        console.log(jquery);
        boot.forEach(article => {
            cardContainer.appendChild(lambCards(article)); 
        })

        //node.js structure
        const node  = response.data.articles.bootstrap;
        console.log(node );
        boot.forEach(article => {
            cardContainer.appendChild(lambCards(article)); 
        })
    })