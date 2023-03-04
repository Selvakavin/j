
// Feedback forms
const formEle=document.querySelector(".feedbackfrom");
//console.log(formEle.elements.radio);

// submit event
formEle.addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log('Form has been submitted');

    // form data...used for backemd api
    console.log([...new FormData(formEle)]);
});

// form data methods trigger only when form data fires...
formEle.addEventListener('formdata',(event)=>{
    const data=event.formData;

    //1. entries
    console.log([...data.entries()]);

    //2.values
    console.log([...data.values()]);

    //3.append
    //console.log(data.append('sk'));

    //4.get
    console.log(data.get('fullname'));

    //5.getAll
    console.log([...data.getAll(formEle)]);
});
