// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

let newTopic = document.querySelector('.topics');

const ourAPI = axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then((response) => {
    console.log(response)
    response.data.topics.forEach(item => {
        let topic = new tab(item);
        newTopic.appendChild(topic);    
    });
});


//my tab Components

function tab(obj) {
//create element(s)
const tab = document.createElement('div');

// set class names
tab.classList.add('tab');

// text content 
tab.textContent = `${obj}`;

//return parent
return tab;

} // end tab component 