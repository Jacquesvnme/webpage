import './style.css'
$(document).ready(function() {
  $("#intro").animate({opacity: '1'}, 3000);
  //$(".flex-items-dashboard").fadeOut(1);  //TODO remove this when done
  $(".intro_text").click(function() {
    $("html, body").animate({scrollTop: "900px"},1500);
    $(".flex-items-dashboard").fadeIn(3000);
  });
  $(".intro_text_subtitle").click(function() {
    $("html, body").animate({scrollTop: "900px"},1500);
    $(".flex-items-dashboard").fadeIn(3000);
  });
});

document.querySelector('#app').innerHTML = `
  <div class="flex-container">
    <div class="flex-items" id="intro">
      <h4 class="intro_text">Welcome</h4>
      <h6 class="intro_text_subtitle">Click me</h6>
    </div>
    <div class="flex-items">
      <div class="flex-container-dashboard" id="dashboard">
        <div class="flex-items-dashboard">
          <div class="flex-name-logo">
            <img src="./logo.png" id="logo" class="flex-items-name-logo">
            <div class="flex-name-logo">
              <h3 class="flex-items-name-logo">Jacques</h3>
              <h4 class="flex-items-name-logo">Van Niekerk</h4>
            </div>
          </div>
          <img src="./profile.jpg" id="profile_img">
          <h4>Title</h4>
          <div class="title">Student Software Engineer</div>
          <h4>Location</h4>
          <div class="location">South Africa, Benoni</div>
          <div class="">STILL NEED TO ADD</div>
        </div>
        <div class="flex-items-dashboard">
          <div class="flex-items-rSide">
            <form id="group1" class="Navbar" onclick="navChange()">
              <input type="radio" id="home_btn" name="group1" value="home">
              <label for="home_btn" id="lbl1">Home</label><br>
              <div class="spacer"></div>
              <input type="radio" id="about_btn" name="group1" value="about">
              <label for="about_btn" id="lbl2">About Me</label><br>
              <div class="spacer"></div>
              <input type="radio" id="job_btn" name="group1" value="job">
              <label for="job_btn" id="lbl3">Job Related</label><br>
              <div class="spacer"></div>
              <input type="radio" id="other_btn" name="group1" value="other">
              <label for="other_btn" id="lbl4">Other</label><br>
              <div class="spacer"></div>
              <input type="radio" id="contact_btn" name="group1" value="contact">
              <label for="contact_btn" id="lbl5">Contact</label><br>
            </form>
          </div>
          <div class="flex-items-rSide">
            STILL NEED TO ADD
          </div>
        </div>
      </div>
    </div>
  </div>
`

/*
Headers

Home
About Me - Description | Hobbies |
Job Related - Education | Licenses & Certificates | Projects | Key Skills & In-depth Skills
Other
Contact & Socials - Contact Details | Socials


backup 

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

window.onscroll = function () {
    console.log(scrollY);

    if (scrollY > 550) {
        $("#name").animate({opacity: '1'},1000);
    }
    if (scrollY > 1000) {
        $("#ot").animate({opacity: '1'},1000);
    }
    if (scrollY > 1000) {
        $("#pimg").animate({opacity: '1'},2000);
    }
    if (scrollY > 1350) {
        $("#description").animate({opacity: '1'},1000);
    }
    if (scrollY > 1600) {
        $("#socials").animate({opacity: '1'},1000);
    }
}

css backup

#profile_img{
  width: 200px;
  height: 200px;
}

.name_text{
  font-size: 60px;
}

.flex-items:nth-child(2){
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: left;
  order: 2;
  opacity: 0;
  
  padding: 150px 0px 150px 0px;
  width: 100%;
  border: 1px red solid;
}

.flex-items:nth-child(3){
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: right;
  order: 3;
  opacity: 0;

  padding: 20px 0px 20px 0px;
  width: 100%;
  border: 1px red solid;
}

.flex-items:nth-child(4){
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: left;
  order: 4;
  opacity: 0;

  padding: 20px 0px 20px 0px;
  width: 100%;
  border: 1px red solid;
}

.flex-items:nth-child(5){
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: right;
  order: 5;
  opacity: 0;

  padding: 20px 0px 20px 0px;
  width: 100%;
  border: 1px red solid;
}

.flex-items:nth-child(6){
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: right;
  order: 6;
  opacity: 0;

  padding: 20px 0px 20px 0px;
  width: 100%;
  border: 1px red solid;
}


*/