function run(i){
    x=document.getElementById("id");
    if(i==='Ac')x.value="";
    else if(i=='=')x.value=eval(x.value);
    else
    x.value+=i;
}

