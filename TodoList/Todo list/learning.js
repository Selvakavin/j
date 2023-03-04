//Event delegation
/*
 <!-- Event delegation-->
    <div class="form">
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
        </ul>
    </div>

const list=document.querySelectorAll(".form li");
list.forEach(ele=>{
    ele.addEventListener('click',(event)=>{
        console.log(ele.textContent);
    })
})


// ipdi use panna performance low agum
// ellarthukum event listner use panna low perf. so we need to find parent apply eventlistner for parent elemenet

*/
// Event delgation overcome 


const tableEle=document.querySelector("table");
let previouslySelected;
tableEle.addEventListener('click',(event)=>{
    const target=event.target; 

    if(target.tagName=='TH' || target.tagName=='TABLE') 
        return;
    if(previouslySelected!=undefined)    
        previouslySelected.parentElement.style.backgroundColor='white'; 

    target.parentElement.style.backgroundColor=`green`;
   // console.log(tableEle);
    previouslySelected=target;
});

// Task:show donate 

const donate=document.querySelector(".showbtn");
donate.addEventListener('click',donateHandler);
let isDonateClicked=false;
function donateHandler(event){
    if(isDonateClicked)return;
    isDonateClicked=true;
    donate.style.backgroundColor='grey'
    const div=document.createElement('div');
    const elemenet=document.createElement('input');
    elemenet.className='inputdonate';
    elemenet.type='number';
    const okbtn=document.createElement('button');
    okbtn.className='ok';
    okbtn.append(document.createTextNode('Ok'));
    div.append(elemenet);
    div.append(okbtn);
    event.target.parentElement.append(div);
    okbtn.addEventListener('click',(event)=>{
        const amts=event.target.previousSibling.value;
        alert(amts);
        event.target.parentElement.remove('div');
        donate.style.backgroundColor='white';
        isDonateClicked=false;
    });
   okbtn.removeEventListener('click',()=>{});
}


