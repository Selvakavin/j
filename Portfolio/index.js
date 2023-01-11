let activeElement='home';
let activeColor='blue';
const innerNavigation=document.querySelectorAll('.innernavigation');
const home=document.querySelector('.home');
const aboutme=document.querySelector('.aboutme');
const skills= document.querySelector('.skills');
const contact=document.querySelector('.contact');
(()=>{homeActive();})();

document.ons=(e)=>{
    console.log(e.target);
}

function homeActive() {
    activeElement='home';
    document.querySelector('.fa-home').parentElement.style.backgroundColor=activeColor;
    document.querySelector('.fa-user').parentElement.style.backgroundColor='rgb(106, 97, 116)';
    document.querySelector('.fa-book').parentElement.style.backgroundColor='rgb(106, 97, 116)';
    document.querySelector('.fa-envelope').parentElement.style.backgroundColor='rgb(106, 97, 116)';
    home.style.display='block';
    aboutme.style.display='none';
    skills.style.display='none';
    contact.style.display='none';
}

function userActive() {
    activeElement='user';
    document.querySelector('.fa-home').parentElement.style.backgroundColor='rgb(106, 97, 116)';
    document.querySelector('.fa-user').parentElement.style.backgroundColor=activeColor;
    document.querySelector('.fa-book').parentElement.style.backgroundColor='rgb(106, 97, 116)';
    document.querySelector('.fa-envelope').parentElement.style.backgroundColor='rgb(106, 97, 116)';
    home.style.display='none';
    aboutme.style.display='block';
    skills.style.display='none';
    contact.style.display='none';
}

function bookActive() {
    activeElement='book';
    document.querySelector('.fa-home').parentElement.style.backgroundColor='rgb(106, 97, 116)';
    document.querySelector('.fa-user').parentElement.style.backgroundColor='rgb(106, 97, 116)';
    document.querySelector('.fa-book').parentElement.style.backgroundColor=activeColor;
    document.querySelector('.fa-envelope').parentElement.style.backgroundColor='rgb(106, 97, 116)';
    home.style.display='none';
    aboutme.style.display='none';
    skills.style.display='block';
    contact.style.display='none';
}

function contactActive() {
    activeElement='envelope';
    document.querySelector('.fa-home').parentElement.style.backgroundColor='rgb(106, 97, 116)';
    document.querySelector('.fa-user').parentElement.style.backgroundColor='rgb(106, 97, 116)';
    document.querySelector('.fa-book').parentElement.style.backgroundColor='rgb(106, 97, 116)';
    document.querySelector('.fa-envelope').parentElement.style.backgroundColor=activeColor;
    home.style.display='none';
    aboutme.style.display='none';
    skills.style.display='none';
    contact.style.display='block';
}

function changeColorOptions() {
    document.querySelector('.controlcolor').style.display='block';
}
function closeColorOptions() {
    document.querySelector('.controlcolor').style.display='none';
}

function changeColor(color) {
    activeColor=color;
    console.log(activeElement);
    document.querySelector('.fa-'+`${activeElement}`).parentElement.style.backgroundColor=activeColor;
    const span=document.querySelectorAll('span');
    document.querySelectorAll('.innerProgressBar').forEach(ele=>{
        ele.style.backgroundColor=activeColor;
    });
    document.querySelector('.mailicon').style.backgroundColor=activeColor;
    document.querySelector('.instaicon').style.backgroundColor=activeColor;
    document.querySelector('.whatsappicon').style.backgroundColor=activeColor;
    span.forEach(ele=>{
        ele.style.color=color;
    });
}


function contactIcons(icon) {
    document.querySelector('.'+icon).style.display='block';
}

function removeIconsExplanation(icon) {
    document.querySelector('.'+icon).style.display='none';
}

function openInstagram() {
    open('https://www.instagram.com/kavin_sk_172/');
}
function openwhatsapp() {
    open('https://api.whatsapp.com/send/?phone=9360148930&text&type=phone_number&app_absent=0');
}