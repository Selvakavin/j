// document.getElementById("h1").onclick=()=>{
//     console.log(prompt());
// }

// let para=document.createElement("p");
// let text=document.createTextNode("hello");
// para.append(prompt());
// console.log(para);
// document.getElementById("div").appendChild(para);


// let e=document.getElementById("h1");
// document.body.addEventListener('keyup',(e)=>{
//     console.log("you pressed key is....",e);
// });
//console.log(e);

//console.log(window.innerHeight);

// open automatically open a new tab used for a ad purpose 
//window.open('https://www.w3schools.com/jsref/obj_window.asp')

// close the tabs
//window.close();
//window.print("hello world") print the current page

// setInterval(()=>{
//     document.title='i have sucessfully';
// },4000)

//window.open('https://mail.google.com/mail/u/0/');/// toxix please handle carefully


//document.writeln('hello sk welcome to js');

//document.body.innerText=prompt();



const inputValue=document.getElementsByClassName("inp");
const btn=document.getElementById("btn");
const foodItems=document.getElementsByClassName("food-list");


// getElementsByClassName is not an array we nedd to convert array and then we use it
// [...inputValue].forEach(ele=>{
//     ele.addEventListener('',(e)=>{
//     });
// });

function createNewFood(){
    const createEle=document.createElement("li");
    createEle.className="items";
    const createText=document.createTextNode(inputValue[0].value);
    const createDiv=document.createElement("div");
    createDiv.append(createText);
    createEle.append(createDiv);

    // creating edit button    
    const createEditbtn=document.createElement('button');
    const createtextedit=document.createTextNode('Edit');
    createEditbtn.className='edit-content';
    createEditbtn.append(createtextedit);
    createDiv.append(createEditbtn);
    createEditbtn.setAttribute('onclick','editcontent(event)');

    // creating cancel button
    const createButton=document.createElement('button');
    createButton.className="cancel-btn";
    createButton.setAttribute('onclick','cancelbtn(event)');
    createButton.textContent="X";    
    createEle.append(createButton);    

    if(inputValue[0].value!="")
    foodItems[0].append(createEle);
    else alert("Empty values cannot be inserted")
    inputValue[0].value="";
}

btn.onclick=()=>{
    createNewFood();
};

document.addEventListener('keyup',(event)=>{
    if(event.key=='Enter')
    createNewFood();
    if(event.ctrlKey && event.key=='z')
    {
        foodItems[0].lastElementChild.remove();
    }  
});

// createDocumentFragment
const documentFragment =()=>{
        const favfood=document.createDocumentFragment();
        for(i=1;i<=10;i++){
            const createEle=document.createElement("li");
            createEle.className="items";
            const createText=document.createTextNode('food is '+i);
            createEle.append(createText);
            favfood.append(createEle);
        }
        foodItems[0].append(favfood);// insert at last
        //foodItems[0].prepend(favfood); // insert at last
        //foodItems[0].before(favfood);  // insert above respective tags
        //foodItems[0].after(favfood); // insert below respective tags
};

//documentFragment();


//insertAdjacentHtml 

const crateAdjacentHtml =()=>{

    //1. beforebegin
    foodItems[0].insertAdjacentHTML('beforebegin','I am Before begin');

    //2. afterbegin
    foodItems[0].insertAdjacentHTML('afterbegin','I am After begin');

    //3. beforeend
    foodItems[0].insertAdjacentHTML('beforeend','I am before end');

    //4. aftereend
    foodItems[0].insertAdjacentHTML('beforeend','I am after end');
}
//crateAdjacentHtml();


// replace new element with existing element

const replaceElementWithExistingElement=()=>{
        const createEle=document.createElement("h3");
        createEle.className="items";
        const createText=document.createTextNode('Hello i am replaced new element');
        createEle.append(createText);

        // replaceWidth
        //foodItems[0].children[0].replaceWith(createEle);

        // replaceChildren
        foodItems[0].replaceChildren(createEle);

        //replaceChild
        //foodItems[0].replaceChild(createEle);
};

//replaceElementWithExistingElement();

//clone a dom object

const cloneobj=()=>{
   // const copyobj=foodItems[0].cloneNode();// by default it have false so it clone only parent ele for cloning a childre we need to give "true"
    const copyobj=foodItems[0].cloneNode(true);// clone element with children
    console.log(copyobj);
    foodItems[0].append(copyobj);
};

//cloneobj();
// Removing DOM Elements

const cancelbtn=(event)=>{
    //console.log(event.target.parentElement);
    event.target.parentElement.remove();    
}

const editcontent=(event)=>{

    const li=event.target.parentElement;
    let text= li.children[0].innerText;

    const div=document.createElement('div');
    const inp=document.createElement('input');
    const h1=document.createElement('h1');
    inp.className='inp';
    inp.type='inp';
    inp.id='inpid'
   // console.log(div);
    if(text.includes('Edit'))
    {
        text=li.innerText;
        text=text.replace('Edit',"");
    }
    inp.value=text;
    const save_button=document.createElement('button');
    save_button.append(document.createTextNode('✅'));
    save_button.setAttribute('onclick','modifiedcontent(event)');
    save_button.className='editingbts';

  

    div.append(inp);
    div.append(save_button);
    if(li.parentElement.className!='food-list')
    li.parentElement.replaceWith(div);
    else 
    li.replaceWith(div);
}

// save edited contents

const modifiedcontent=(event)=>{
    const parentele=event.target.parentElement;
    const text=parentele.children[0].value;

    const createEle=document.createElement("li");
    createEle.className="items";
    const createText=document.createTextNode(text);
    const createDiv=document.createElement("div");
    createDiv.append(createText);
    createEle.append(createDiv);

    // creating edit button    
    const createEditbtn=document.createElement('button');
    const createtextedit=document.createTextNode('Edit');
    createEditbtn.className='edit-content';
    createEditbtn.append(createtextedit);
    createDiv.append(createEditbtn);
    createEditbtn.setAttribute('onclick','editcontent(event)');

    // creating cancel button
    const createButton=document.createElement('button');
    createButton.className="cancel-btn";
    createButton.setAttribute('onclick','cancelbtn(event)');
    createButton.textContent="X";    
    createEle.append(createButton);    
    
    if(text!='')
    parentele.replaceWith(createEle);
    else alert('Empty values cannot be modified')
    
}

// Traversing a DOM

const favFoods=["Bririyani","Chicken rice","Chicken noodles"];

//we traverse our html element by querySelector

const traversedom=()=>{
        const foodlists=document.querySelectorAll(".food-list .items");
        console.log('of method....!');
        for(let i of foodlists)
            console.log(i);

        // forEach
        console.log('for each method....!');
        foodlists.forEach(ele =>{
            console.log(ele);
        });

        // spread operator
        console.log('spreda operator with for method....!');
        [...foodlists].forEach(ele =>{
            console.log(ele);
        });

        // Array from
        console.log('Array from with for method....!');
        Array.from(foodlists).forEach(ele =>{
            console.log(ele);
        });
};

//traversedom();

// Finding Child Elements...

const findtheChildElements=()=>{
    const id=document.getElementById("items-id");

    //children
    console.log(id.children);

    //firstChild
    console.log(id.firstChild);

    //firstElementChild
    console.log(id.firstElementChild);

     //lastChild
     console.log(id.lastChild);

     //lastElementChild
     console.log(id.lastElementChild);
};

//findtheChildElements();

// parentElements

function parentelements(){
    const ele=document.getElementById("items-id");
    // parentNode
    console.log(ele.parentNode);

    // parentelement
    console.log(ele.parentElement.parentElement);

}

//parentelements();

//Finding siblings


function siblings(){
    const ele=document.getElementById("items-id");

    //nextsibling
    console.log(ele.nextSibling);

    //nextElementsibiling
    console.log(ele.nextElementSibling);    

    //previous sibling
    console.log(ele.previousSibling);

    // previousElementSibling
    console.log(ele.previousElementSibling);

}

//siblings();

// Bubling and capturing
//see in js excersie


// Preventing default browser actions
/*
const submit=document.querySelector('.submit');
const checkbox=document.querySelector(".checkbox");
const input=document.querySelector(".input");
submit.addEventListener('click',(event)=>{
    //event.preventDefault();
    console.log('submited',input.value,checkbox.checked);//checkbox.checked ->used to check if check box is on
},{passive:true});// instead preventDefault we use passive
//console.log(submit);

*/


