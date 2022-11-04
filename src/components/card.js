import axios from "axios";

const Card = (article) => {
  console.log(article)

  let newCard = document.createElement('div')

  let newHeadline = document.createElement('div')
  let newAuthor = document.createElement('div')
  let newContainer = document.createElement('div')
  let newImg = document.createElement('img')
  let newName = document.createElement('span')

  newCard.classList.add('card')
  newHeadline.classList.add("headline")
  newAuthor.classList.add('author')
  newContainer.classList.add('img-container')

  newHeadline.textContent = article.headline
  newImg.src = article.authorPhoto
  newName.textContent = `By ${article.authorName}`

  newCard.appendChild(newHeadline)
  newCard.appendChild(newAuthor)
  newAuthor.appendChild(newContainer)
  newAuthor.appendChild(newName)
  newContainer.appendChild(newImg)

  return newCard
}
// TASK 5
// ---------------------
// Implement this function, which should return the markup you see below.
// It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
// The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
// The text inside elements will be set using their `textContent` property (NOT `innerText`).
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// <div class="card">
//   <div class="headline">{ headline }</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={ authorPhoto }>
//     </div>
//     <span>By { authorName }</span>
//   </div>
// </div>
//

let URL = `http://localhost:5001/api/articles`

const cardAppender = (selector) => {

  axios.get(URL)
    .then(res => {
      fetcher(res.data.articles)
    })

    .catch(err => console.log(err))


  function fetcher(article) {
    let Categories = Object.keys(article)
    Categories.forEach(category => {
      article[category].forEach((article) => {
        document.querySelector(selector).appendChild(Card(article))
      })
    })
  }

}











// TASK 6
// ---------------------
// Implement this function that takes a css selector as its only argument.
// It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
// However, the articles do not come organized in a single, neat array. Inspect the response closely!
// Create a card from each and every article object in the response, using the Card component.
// Append each card to the element in the DOM that matches the selector passed to the function.
//


export { Card, cardAppender }
