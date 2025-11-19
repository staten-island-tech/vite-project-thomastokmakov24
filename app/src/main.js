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

bookArray = [
  { title: "The Joy Luck Club", author: "Amy Tan", year: 2000, read: true  }, //the idea is read is T=> mark as read and to read if False.
  { title: "The Summer Hikaru Died", author: "Mokumokuren", year: 2023, read: true },
  { title: "1984", author: "George Orwell", year: 1949, read: false },
  { title: "DBZ", author: "Akira Toriyama", year: 1989, read: false },
  { title: "Trials of Apollo", author: "Rick Riordan", year: 2016, read: true },
];

readbucket = [];
toreadbucket = [];


