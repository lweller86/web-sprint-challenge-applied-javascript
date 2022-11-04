import axios from "axios";


const Tabs = (topic) => {
   let topicWrapper = document.createElement('div')
  topicWrapper.classList.add('topics')

  topic.forEach(topicText =>{
    const topics = document.createElement('div');
    topics.textContent = topicText;
    topics.classList.add('tab')
    topicWrapper.appendChild(topics)

  })



return topicWrapper

}










  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //



  let URL = `http://localhost:5001/api/topics`

  const tabsAppender = (selector) => {


axios.get(URL)
    .then(res => {
      
      document.querySelector(selector).appendChild(Tabs(res.data.topics))
  })
    .catch(err => console.log(err))
    
    }
    
    
  


    
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //


export { Tabs, tabsAppender }
