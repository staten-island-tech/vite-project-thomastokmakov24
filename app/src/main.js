import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`
//meme plan out. find the things. display it it. Select one and not save to a list. Add text. output the meme with the text on the image. Text content. You can use url to do videos and pictures. 
setupCounter(document.querySelector('#counter'))

const bookArray = [
  { title: "The Joy Luck Club", author: "Amy Tan", year: 2000, read: 1 , image: "https://i.pinimg.com/originals/7e/d7/52/7ed7521603385e27b5719b7699b31d47.jpg" }, //the idea is read is T=> mark as read and to read if False.
  { title: "The Summer Hikaru Died", author: "Mokumokuren", year: 2023, read: 2, image: "https://th.bing.com/th/id/OIP.BoehT_tAJalkya1TIoraGAHaKe?w=186&h=263&c=7&r=0&o=7&pid=1.7&rm=3" },
  { title: "1984", author: "George Orwell", year: 1949, read: 3 , image: "https://th.bing.com/th/id/OIP.er1VXwv6qs9hs5SAsjJ-XwHaMi?w=186&h=315&c=7&r=0&o=7&pid=1.7&rm=3"},
  { title: "DBZ", author: "Akira Toriyama", year: 1989, read: 4, image: "https://th.bing.com/th/id/OIP.7bEKefwm73Nn_g2eBSuKEQHaLH?w=186&h=279&c=7&r=0&o=7&pid=1.7&rm=3" },
  { title: "Trials of Apollo", author: "Rick Riordan", year: 2016, read: 5, image: "https://th.bing.com/th/id/OIP.j0BqORCtvpx0gO5FYoo-CQHaJ4?w=129&h=180&c=7&r=0&o=7&pid=1.7&rm=3" },
];
//images book covers. Put the two lists on screen preferrableyside by side but top and bottom is fine. Have 
function inject(cry) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class="card" data-title="${cry.title}"  data-author="${cry.author}"data-year="${cry.year}" data-read="${cry.read}" data-image="${cry.image}">
        <img class="cardImg" src=${cry.image} alt="mimimimimi"/>
        <button class = "btn">Cycle</button>
        <h2 >${cry.cardHeader}</h2> 
        <h2 class = "cardPrice" >${cry.cardPrice}</h2>
        </div>`,
  );
}
let tobuybucket = [];let toreadbucket = [];let currentbucket = [];let readbucket = [];let againbucket = [];

//bookArray.forEach(book)
function cycle(book) {
  if ((book.read) == 1) {
    tobuybucket.push(book);
    /* x++; */}
    else if ((book.read) == 2) {
      toreadbucket.push(book);
      }
      else if ((book.read) == 3) {
        currentbucket.push(book);
        }
        else if ((book.read) == 4) {
          readbucket.push(book);
          }
          else if ((book.read) == 5) {
            againbucket.push(book);
            }
            else if ((book.read) > 5) {
              book.read = 1;}  }



//cycle(bookArray.forEach(book));
bookArray.forEach(cycle);//GPT WAS HELPED WITH THIS ONE ^^^^^^^^

console.log("Books To Buy:", tobuybucket);
console.log("Books Currently Reading:", currentbucket);
console.log("Books To Read Again:", againbucket);
console.log("Books Read:", readbucket);
console.log("Books To Read:", toreadbucket);






//slip(book);//one = is setting it to be something else and comparing is two ==. is it was a variable of a string, do ===























