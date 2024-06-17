import './style.css'
import { setup3D } from './model.js'

document.querySelector('#app').innerHTML = `
  <div class="intro">
    <div class="intro_text">Welcome</div>
  </div>
  <div id="model"></div>
  <div class="flex-container">
    <div class="flex-items">Webpage being redesigned</div>
    <div class="flex-items">Still Being Implemented</div>
  </div>
`

setup3D(document.querySelector('#model'))

/*
<div>
    <a href="https://vitejs.dev" target="_blank">
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
*/
