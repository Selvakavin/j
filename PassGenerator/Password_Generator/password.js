function generate(event) {
    let smallLetters="abcdefghijklmnopqrstuvwxyz";
    let capitalLetters=smallLetters.toUpperCase();
    let numbers="0123456789";
    let symbols="~!@#$%^&*()_+{}|:<>?</>\,.";
    let password=smallLetters.charAt(Math.random()*26);
    password+=capitalLetters.charAt(Math.random()*26);
    password+=smallLetters.charAt(Math.random()*26);
    password+=symbols.charAt(Math.random()*20);
    password+=capitalLetters.charAt(Math.random()*26);    
    password+=numbers.charAt(Math.random()*10);
    password+=numbers.charAt(Math.random()*10);
    let element=event.target;
   // element.insertAdjacentHTML('afterend',`<P class='pass'>${'password is '+password}</P>`);
    let generatedPass=document.getElementById("generatedpass");
    generatedPass.innerHTML=`<P class='pass'>${'Generated Password is  '+password}</P>`
}