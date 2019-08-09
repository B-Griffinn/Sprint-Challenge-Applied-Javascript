// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component


function headerComp() {
    //create elements
    let headDiv = document.createElement('div')
    let dateSpan = document.createElement('span');
    let lambdaHeading = document.createElement('h1');
    let tempSpan = document.createElement('span');
    
    //append elements
    headDiv.appendChild(dateSpan);
    headDiv.appendChild(lambdaHeading);
    headDiv.appendChild(tempSpan);
    
    //assign class names
    headDiv.classList.add('header');
    dateSpan.classList.add('date');
    tempSpan.classList.add('temp');
    
    // element content or imgsrcs
    dateSpan.textContent = 'SMARCH 28, 2019';
    // dateSpan.style.display = 'flex';
    
    
    lambdaHeading.textContent = "Lambda Times";
    tempSpan.textContent = '98°';
    
    // return 
    return headDiv;
    }
    
    console.log(headerComp());
    
    let ourComp = document.querySelector('.header-container');
    ourComp.appendChild(headerComp());