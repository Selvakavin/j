const findEl=document.querySelector('.find');
inputEl=document.querySelector('.inp');

findEl.addEventListener('click',(e)=>{
    if(inputValidation(inputEl.value)==true)
    {
        searchRecord(inputEl.value);
    }
    else
    inputEl.style.color="red";
});

inputEl.addEventListener('keyup',(e)=>{

    if("~!@#$%^&*()><?><;?:}=-+,._/".includes(inputEl.value.charAt(inputEl.value.length-1)))
        inputEl.value=inputEl.value.substr(0,inputEl.value.length-1);
    if(inputValidation(inputEl.value)==true && e.key=='Enter')
     {
        searchRecord(inputEl.value);
     }
     else if (inputEl.value.length>=3)
         inputEl.style.color="green";
    else 
        inputEl.style.color="red";
});

function inputValidation(text)
{
    const numbers="0123456789";
    if(numbers.includes(text.charAt(0)+"") || (text.length>1 && numbers.includes(text.charAt(1)+"")))
     {
           inputEl.value="";
           return false;
     }    
     if (inputEl.value.length>=3)
           inputEl.style.color="green";
     return true;     
}

async function getJSONData()
{
    const response= await fetch('../asserts/json/filename.json');
    const json=await response.json();
    return json;
}

// Finding required output
const disp=document.querySelector(".display");
async function searchRecord(code) {
    code=code.toUpperCase();
    const jsonData= await getJSONData();
    const reuiredData=jsonData.find(element=>
    {
       // console.log(code,element);
        return code===element.code;        
    });
    if(reuiredData)
    {        
        disp.style.visibility='visible';
        const query=document.querySelector('.query');
        query.innerText="Your Query: "+`${reuiredData.code}`;


        const code=document.getElementById("code");
        const location=document.getElementById("location");
        const type=document.getElementById("type");
        const dist=document.getElementById("dist");
        code.innerText=reuiredData.code;
        location.innerText=reuiredData.location;
        type.innerText=reuiredData.type;
        dist.innerText=reuiredData.district;
    }
}

const clear=document.querySelector(".btn-clear");
clear.addEventListener('click',(e)=>{
 disp.style.visibility='hidden';
});
console.log(clear);