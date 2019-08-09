// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


//GET the api provided 
const ourAPI = axios.get('https://lambda-times-backend.herokuapp.com/topics');
// .then((response) => {
//     console.log(response)
//     response.data.topics.forEach(item => {
//         let topic = new tab(item);
//         newTopic.appendChild(topic);    
//     });
// });

// select our parent where we will append everything to
let topicSelector = document.querySelector('.topics');

// using a promise from the api loop through all 5 topics in order to create a tab element for each

ourAPI.then(response => {
    response.data.topics.forEach(topic => {
        //create components here
        const ourTab = document.createElement('div');
        ourTab.classList.add('tab');
        ourTab.textContent =  `${topic}`;
        topicSelector.appendChild(ourTab);
    })
    
}) //end of THEN
.catch(err => {
        console.log(err);
    }) //end of CATCH