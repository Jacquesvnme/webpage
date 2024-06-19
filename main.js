//import './style.css'
import { setup3D } from './model.js'

document.querySelector('#app').innerHTML = `
  <div class="intro">
    <h4 class="intro_text">Welcome</h4>
  </div>
  <div class="nova_model" id="model"></div>
  <div class="flex-container">
    <div class="flex-items" id="name">
      My name is <br>
      <h1 class="name_text">Jacques Van Niekerk</h1>
    </div>
    <div class="flex-items" id="ot">
      Title: Student Software Engineering Specialisation <br>
      Location: South Africa, Benoni
    </div>
    <div class="flex-items" id="pimg">
      <img src="./profile.jpg" alt="" id="profile_img">
    </div>
    <div class="flex-items" id="description">
      Im a student currently studying at Belgium Campus <br>
      I have learnt a wide variety of programming languages and frameworks <br>
      I believe my problem solving skills is a highly valuable skill that <br>
      will help me solve any problem that might come my way <br>
      I am always open to learning new languages and gaining new knowledge <br>
      I also have proficient skills in web programming which includes <br>
      HTML, CSS, and JavaScript, along with a few frameworks & modules <br>
      I would like to further my progress and one day become a full stack developer
    </div>
    <div class="flex-items" id="socials">
      Phone number: 072 503 1287 <br>
      Email: 577343@student.belgiumcampus.co.za <br>
      Github: url <br>
      LinkedIn: url <br>
      Codecademy: url <br>
      W3Schools: url <br>
      Wakatime: url
  </div>
  </div>
`

setup3D(document.querySelector('#model'))