let navMenu = document.getElementById('nav_menu'),
    navToggle = document.getElementById('nav_toggle'),
    navClose = document.getElementById('nav_close')


    if(navToggle){
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show_navbar')
        })
    }

    if(navClose){
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show_navbar')
        })
    }
        /* remove menu on click */
    const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav_menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show_navbar')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
   

//skills

let skillsContent = document.getElementsByClassName('skills_content'),
    skillsHeader = document.querySelectorAll('.skills_header')


function toggleSkills(){
    let itemCLass = this.parentNode.className

    for(i=0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills_content skills_close'

    } 
    if(itemCLass==='skills_content skills_close'){
        this.parentNode.className = 'skills_content skills_open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

//qualification
let tabs= document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')


tabs.forEach(tab => {
    tab.addEventListener('click', ()=> {
        let target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
    })
})

//Modal

let modalViews = document.querySelectorAll('.services_modal'),
    modalBtns = document.querySelectorAll('.services_button'),
    modalCloses = document.querySelectorAll('.services_modal_close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active_modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active_modal')
        })
    })
})

//scroll active
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 200;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active_link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active_link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

//navbar active
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll_header'); else nav.classList.remove('scroll_header')
}
window.addEventListener('scroll', scrollHeader)

//show scroll top
function scrollUp(){
    const scrollUp = document.getElementById('scroll_up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show_scroll'); else scrollUp.classList.remove('show_scroll')
}
window.addEventListener('scroll', scrollUp)

//themes
const themeButton = document.getElementById('theme_button')
const darkTheme = 'dark_theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected_theme')
const selectedIcon = localStorage.getItem('selected_icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected_theme', getCurrentTheme())
    localStorage.setItem('selected_icon', getCurrentIcon())
})


//form validation
function validateForm() {
    var x = document.forms["myForm"]["text"].value;
    var y = document.forms["myForm"]["email"].value;
    var z = document.forms["myForm"]["message"].value;
        
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    if (y == "") {
      alert("email must be filled out");
      return false;
    }
    if (z == "") {
      alert("message must be filled out");
      return false;
    }
  }
