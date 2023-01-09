const home=document.querySelector('.btnhome');
const about=document.querySelector('.btnabout');
const skills=document.querySelector('.btnskills');
const contact=document.querySelector('.btncontact');
const inputcolor=document.querySelector('.inputcolor');

(()=>{startAtHomePage();})();

home.addEventListener('click',(e)=>{
    startAtHomePage();
});

function startAtHomePage(params) {
    document.querySelector('.home').style.display='block';
    if(inputcolor.value!='#000000')
        home.style.color=inputcolor.value;
    else 
        home.style.color='green';
    about.style.color='white';
    skills.style.color='white';
    contact.style.color='white';
    document.querySelector('.about').style.display='none';
    document.querySelector('.skills').style.display='none';
    document.querySelector('.contact').style.display='none';
}
about.addEventListener('click',(e)=>{
    document.querySelector('.about').style.display='block';
    home.style.color='white';
    if(inputcolor.value!='#000000')
        about.style.color=inputcolor.value;
    else 
        about.style.color='green';
    skills.style.color='white';
    contact.style.color='white';
    document.querySelector('.home').style.display='none';
    document.querySelector('.skills').style.display='none';
    document.querySelector('.contact').style.display='none';
});

skills.addEventListener('click',(e)=>{
    home.style.color='white';
    about.style.color='white';
    if(inputcolor.value!='#000000')
        skills.style.color=inputcolor.value;
    else 
        skills.style.color='green';
    contact.style.color='white';
    document.querySelector('.skills').style.display='block';
    document.querySelector('.home').style.display='none';
    document.querySelector('.about').style.display='none';
    document.querySelector('.contact').style.display='none';
});

contact.addEventListener('click',(e)=>{
    home.style.color='white';
    about.style.color='white';
    skills.style.color='white';
    if(inputcolor.value!='#000000')
        contact.style.color=inputcolor.value;
    else 
    contact.style.color='green';
    document.querySelector('.skills').style.display='none';
    document.querySelector('.home').style.display='none';
    document.querySelector('.about').style.display='none';
    document.querySelector('.contact').style.display='block';
});

// changing responsive font color

const span=document.getElementsByTagName('span');
function changeFontColor(color) {
    [...span].forEach(element => {
        element.style.color=color;
    });
}

inputcolor.addEventListener('click',(e)=>{
    document.body.addEventListener('click',(e)=>{
        inputcolor.style.color=changeFontColor(inputcolor.value);
        document.querySelector('.resume-download').style.backgroundColor=inputcolor.value;
        document.querySelector('.portfolio').style.color=inputcolor.value;        
        const progressBar=document.querySelectorAll('.progressBar');
        progressBar.forEach(ele=>{
            ele.style.backgroundColor=inputcolor.value;
        });
    });
});

const resume=document.querySelector('.resume');
resume.addEventListener('click',(e)=>{
    const aElement=document.createElement('a');
    aElement.href='Resume\Resume-Sk';
    aElement.download='Resume.pdf';
    aElement.click();
});
