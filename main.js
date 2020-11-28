// This function handles the navbar. When the hamburger icon is clicked, the navbar will slide out and the 
// links will be there to click. This also handels the hamburger being clicked again to minimize the tab.
const slideNavbar = () => {
  // Gets all the links/background divs by their id
  var element = document.getElementById("spans");
  var navbar_slider = document.getElementById("navbar_slider");
  var navbar_links = document.getElementById("navbar_links");

  // Hides some elements from view or shows them
  // It also gives the burger icon an activeState class to start an animation
  for (let i = 0; i < 3; i++) {
    if (element.children[i].classList.contains("activeState")) {
      element.children[i].classList.remove("activeState");
    } else {
      element.children[i].classList.add("activeState");
    }
  }
  // Hides/shows some elements depending on if they're already active or not
  if (element.children[0].classList.contains("activeState")) {
    navbar_slider.style.display = 'block';
    navbar_slider.classList.add('showIt');
    navbar_links.style.display = 'block';
    navbar_links.classList.add('showIt');
  } else {
    navbar_slider.style.display = 'none';
    navbar_links.style.display = 'none';
  }

}

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos || window.scrollY === 0) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("bottominfo").style.top = '90%';
  } else {
    document.getElementById("navbar").style.top = "-11%";
    document.getElementById("bottominfo").style.top = '100%';
  }
  prevScrollpos = currentScrollPos;
}

// This function serves the purpose of putting code that is common to all the project files in there
// so I didn't have to retype it over and over again. It just fills inner divs.
function fillNavForProjects() {
  const navDiv = document.getElementById('navbar')
  navDiv.innerHTML = `<h2><a href='../index.html'>Jacob Tucker</a></h2>
  <a class="navbar_burgericon" id="spans" onclick="slideNavbar()" onkeypress="slideNavbar()" tabindex="1">
    <span></span>
    <span></span>
    <span></span>
  </a>
  <!-- Navbar part of slider -->
  <div class="navbar_slider" id="navbar_slider"></div>`

  const secondNavDiv = document.getElementById('navbar_links')
  secondNavDiv.innerHTML = `<p aria-labelledby="about me page">01.</p>
  <a href='../index.html' tabindex="2">
    <h4>ABOUT ME</h4>
  </a>
  <p aria-labelledby="projects page">02.</p>
  <a href='./projects.html' tabindex="3">
    <h4>PROJECTS</h4>
  </a>
  <p aria-labelledby="contact page">03.</p>
  <a href='../contact/contact.html' tabindex="4">
    <h4>CONTACT</h4>
  </a>
  <p aria-labelledby="resume page">04.</p>
  <a target="_blank" href='../gifs/resume.pdf' tabindex="5">
    <h4>RESUME</h4>
  </a>`
}

function fillBottomInfo() {
  const bottomDiv = document.getElementById('bottominfo')
  bottomDiv.innerHTML = `<a href='https://github.com/jacobtucker2023' target='_blank' class="githublogomain" tabindex="7">
  <img src='../gifs/githublogo.png' alt="github logo picture" />
</a>
<a href='https://www.linkedin.com/in/jacob-tucker-7435221b1/' target='_blank' class="linkedinlogomain" tabindex="8">
  <img src='../gifs/linkedinlogo2.png' alt="linkedin logo picture" />
</a>
<a href='mailto: jacobtucker2023@u.northwestern.edu' class="emaillogomain" tabindex="9">
  <img src='../gifs/emailicon.png' alt="email logo picture" />
</a>`
}
