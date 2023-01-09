let hrs=0;
let mins=0;
let secs=0;
let action=document.querySelector('.action');
let changingTimes=document.querySelector('.time');
var interval;
var isAlreadyClicked=true;
action.addEventListener('click',(event)=>{
    let location=event.target.className; 
    if(location=='start' && isAlreadyClicked)   
     {
           interval=setInterval(display,1000);
           event.target.parentElement.children[0].innerText="Start";
           event.target.parentElement.children[0].style.backgroundColor='grey';
           blockStartClicking(event);
     }
    else if(location=='stop')
    {
          clearInterval(interval);
          event.target.parentElement.children[0].style.cursor='pointer';
          event.target.parentElement.children[0].innerText="Continue";
          event.target.parentElement.children[0].style.backgroundColor='lightgreen';
          isAlreadyClicked=true;
    }
});

function display() {
        if(secs==59){secs=-1;mins++;}
        if(mins==59){mins=0;hrs++}
        if(hrs==24)hrs=1;
        secs++;
        let hrsLessThanTen=hrs+"";
        let minsLessThanTen=mins+"";
        let secsLessThanTen=secs+"";
        if(hrsLessThanTen.length==1)hrsLessThanTen="0"+hrsLessThanTen;
        if(minsLessThanTen.length==1)minsLessThanTen="0"+minsLessThanTen;
        if(secsLessThanTen.length==1)secsLessThanTen="0"+secsLessThanTen;
        changingTimes.children[0].value=hrsLessThanTen;
        changingTimes.children[1].value=minsLessThanTen;
        changingTimes.children[2].value=secsLessThanTen;
}

function reset(event) {
        changingTimes.children[0].value="";
        changingTimes.children[1].value="";
        changingTimes.children[2].value="";
        clearInterval(interval);
        event.target.parentElement.children[0].style.cursor='pointer';
        event.target.parentElement.children[0].innerText="Start";
        event.target.parentElement.children[0].style.backgroundColor="lightgreen";
        isAlreadyClicked=true;
        hrs=0;
        mins=0;
        secs=0;
}

function blockStartClicking(event)
{
        event.target.style.cursor='not-allowed';
        isAlreadyClicked=false;
}
