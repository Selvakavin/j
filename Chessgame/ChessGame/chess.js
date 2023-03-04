/*
 <i class='fas fa-chess-knight' style='font-size:90px'></i>
    <i class='fas fa-chess-rook' style='font-size:36px'></i>
    <i class='fas fa-chess-king' style='font-size:36px'></i>
    <i class='fas fa-chess-bishop' style='font-size:36px'></i>
    <i class='fas fa-chess-pawn' style='font-size:36px'></i>
    <i class='fas fa-chess-queen' style='font-size:36px'></i>
*/

//a2-black-pawn
/*
function fu(){
    let r=document.getElementById("a");
    let t=document.getElementById("b");
    //t.style.color='blue';
    y='queen';
    t.innerHTML=`<i class='fas fa-chess-${y}' style='font-size:36px'></i>`;  
    //t.style.visibility='visible';
    r.innerHTML=`<i class='fas fa-chess-king' style='font-size:36px'></i>`;

    let k=document.getElementById("start");
    
    console.log(k.value);
    k.value='red';
    fuc();
}
const fuc =() =>{
    let k=document.getElementById("start");
    console.log(k.  value);
}

*/
let warn=document.getElementById("warning");
let touch=document.getElementById("touch");
let touchpiece=document.getElementById("touchpiece");
let note=document.getElementById("note");
let brownattack=document.getElementById("brownattack");
let blueattack=document.getElementById("blueattack");
const assignicons =() =>{
    warn.innerText="";
    touch.innerText="Touch piece:";
    note.innerText="Note* Double at particular box to move source to destination:";
    brownattack.innerText="Brown Attacks's: "
    blueattack.innerText="Blue Attacks's: "
   document.getElementById("A2").innerHTML=`<i class='fas fa-chess-pawn' style='font-size:36px; color:brown'></i>`
   document.getElementById("A2").value="brownpawn";
   document.getElementById("B2").innerHTML=`<i class='fas fa-chess-pawn' style='font-size:36px; color:brown'></i>`
   document.getElementById("B2").value="brownpawn";
   document.getElementById("C2").innerHTML=`<i class='fas fa-chess-pawn' style='font-size:36px; color:brown'></i>`
   document.getElementById("C2").value="brownpawn";
   document.getElementById("D2").innerHTML=`<i class='fas fa-chess-pawn' style='font-size:36px; color:brown'></i>`
   document.getElementById("D2").value="brownpawn";
   document.getElementById("E2").innerHTML=`<i class='fas fa-chess-pawn' style='font-size:36px; color:brown'></i>`
   document.getElementById("E2").value="brownpawn";
   document.getElementById("F2").innerHTML=`<i class='fas fa-chess-pawn' style='font-size:36px; color:brown'></i>`
   document.getElementById("F2").value="brownpawn";
   document.getElementById("G2").innerHTML=`<i class='fas fa-chess-pawn' style='font-size:36px; color:brown'></i>`
   document.getElementById("G2").value="brownpawn";
   document.getElementById("H2").innerHTML=`<i class='fas fa-chess-pawn' style='font-size:36px; color:brown'></i>`
   document.getElementById("H2").value="brownpawn";
   document.getElementById("A1").innerHTML=`<i class='fas fa-chess-rook' style='font-size:36px; color:brown'></i>`
   document.getElementById("A1").value="brownrook";
   document.getElementById("H1").innerHTML=`<i class='fas fa-chess-rook' style='font-size:36px; color:brown'></i>`
   document.getElementById("H1").value="brownrook";
   document.getElementById("B1").innerHTML=`<i class='fas fa-chess-knight' style='font-size:36px; color:brown'></i>`
   document.getElementById("B1").value="brownknight";   
   document.getElementById("G1").innerHTML=`<i class='fas fa-chess-knight' style='font-size:36px; color:brown'></i>`
   document.getElementById("G1").value="brownknight";   
   document.getElementById("F1").innerHTML=`<i class='fas fa-chess-bishop' style='font-size:36px; color:brown'></i>`
   document.getElementById("F1").value="brownbishop";
   document.getElementById("C1").innerHTML=`<i class='fas fa-chess-bishop' style='font-size:36px; color:brown'></i>`
   document.getElementById("C1").value="brownbishop";
   document.getElementById("D1").innerHTML=`<i class='fas fa-chess-queen' style='font-size:36px; color:brown'></i>`
   document.getElementById("D1").value="brownqueen";  
   document.getElementById("E1").innerHTML=`<i class='fas fa-chess-king' style='font-size:36px; color:brown'></i>`
   document.getElementById("E1").value="brownking";
   
   
   document.getElementById("A7").innerHTML=`<i class='fas fa-chess-pawn' style='font-size:36px; color:blue'></i>`
   document.getElementById("A7").value="bluepawn";
   document.getElementById("B7").innerHTML=`<i class='fas fa-chess-pawn' style='font-size:36px; color:blue'></i>`
   document.getElementById("B7").value="bluepawn";
   document.getElementById("C7").innerHTML=`<i class='fas fa-chess-pawn' style='font-size:36px; color:blue'></i>`
   document.getElementById("C7").value="bluepawn";
   document.getElementById("D7").innerHTML=`<i class='fas fa-chess-pawn' style='font-size:36px; color:blue'></i>`
   document.getElementById("D7").value="bluepawn";
   document.getElementById("E7").innerHTML=`<i class='fas fa-chess-pawn' style='font-size:36px; color:blue'></i>`
   document.getElementById("E7").value="bluepawn";
   document.getElementById("F7").innerHTML=`<i class='fas fa-chess-pawn' style='font-size:36px; color:blue'></i>`
   document.getElementById("F7").value="bluepawn";
   document.getElementById("G7").innerHTML=`<i class='fas fa-chess-pawn' style='font-size:36px; color:blue'></i>`
   document.getElementById("G7").value="bluepawn";
   document.getElementById("H7").innerHTML=`<i class='fas fa-chess-pawn' style='font-size:36px; color:blue'></i>`
   document.getElementById("H7").value="bluepawn";
   document.getElementById("A8").innerHTML=`<i class='fas fa-chess-rook' style='font-size:36px; color:blue'></i>`
   document.getElementById("A8").value="bluerook";
   document.getElementById("H8").innerHTML=`<i class='fas fa-chess-rook' style='font-size:36px; color:blue'></i>`
   document.getElementById("H8").value="bluerook";
   document.getElementById("B8").innerHTML=`<i class='fas fa-chess-knight' style='font-size:36px; color:blue'></i>`
   document.getElementById("B8").value="blueknight";   
   document.getElementById("G8").innerHTML=`<i class='fas fa-chess-knight' style='font-size:36px; color:blue'></i>`
   document.getElementById("G8").value="blueknight";   
   document.getElementById("F8").innerHTML=`<i class='fas fa-chess-bishop' style='font-size:36px; color:blue'></i>`
   document.getElementById("F8").value="bluebishop";
   document.getElementById("C8").innerHTML=`<i class='fas fa-chess-bishop' style='font-size:36px; color:blue'></i>`
   document.getElementById("C8").value="bluebishop";
   document.getElementById("D8").innerHTML=`<i class='fas fa-chess-queen' style='font-size:36px; color:blue'></i>`
   document.getElementById("D8").value="bluequeen";  
   document.getElementById("E8").innerHTML=`<i class='fas fa-chess-king' style='font-size:36px; color:blue'></i>`
   document.getElementById("E8").value="blueking";

   document.getElementById("A4").innerHTML=`<p></p>`
   document.getElementById("B4").innerHTML=`<p></p>`
   document.getElementById("C4").innerHTML=`<p></p>`
   document.getElementById("D4").innerHTML=`<p></p>`
   document.getElementById("E4").innerHTML=`<p></p>`
   document.getElementById("F4").innerHTML=`<p></p>`
   document.getElementById("G4").innerHTML=`<p></p>`
   document.getElementById("H4").innerHTML=`<p></p>`

   document.getElementById("A3").innerHTML=`<p></p>`
   document.getElementById("B3").innerHTML=`<p></p>`
   document.getElementById("C3").innerHTML=`<p></p>`
   document.getElementById("D3").innerHTML=`<p></p>`
   document.getElementById("E3").innerHTML=`<p></p>`
   document.getElementById("F3").innerHTML=`<p></p>`
   document.getElementById("G3").innerHTML=`<p></p>`
   document.getElementById("H3").innerHTML=`<p></p>`

   document.getElementById("A5").innerHTML=`<p></p>`
   document.getElementById("B5").innerHTML=`<p></p>`
   document.getElementById("C5").innerHTML=`<p></p>`
   document.getElementById("D5").innerHTML=`<p></p>`
   document.getElementById("E5").innerHTML=`<p></p>`
   document.getElementById("F5").innerHTML=`<p></p>`
   document.getElementById("G5").innerHTML=`<p></p>`
   document.getElementById("H5").innerHTML=`<p></p>`


   document.getElementById("A6").innerHTML=`<p></p>`
   document.getElementById("B6").innerHTML=`<p></p>`
   document.getElementById("C6").innerHTML=`<p></p>`
   document.getElementById("D6").innerHTML=`<p></p>`
   document.getElementById("E6").innerHTML=`<p></p>`
   document.getElementById("F6").innerHTML=`<p></p>`
   document.getElementById("G6").innerHTML=`<p></p>`
   document.getElementById("H6").innerHTML=`<p></p>`
   startGame();   
}
let turnfinder=1;
const startGame = () =>{
    turnfinder++;
    let turn=document.getElementById("turn");
    if(turnfinder%2==0){
        turn.innerText="Brown Turn's";
        turn.style.color='brown';
    }
    else{
        turn.innerText="Blue Turn's";
        turn.style.color='blue';
    }
}

let twomove=0;
values=[]
idies=[]
const Move =(id) =>{
        warn.innerText="";
        let r=document.getElementById(id);
       // console.log(id);
        values.push(r.value);
        idies.push(id);
        twomove++;
        let piece=values[0];
        let clr='';
        let coin='';
        if(piece.charAt(1)=='l'){
            clr='blue';
            coin=piece.substring(4,piece.length);              
        }
        else {
            clr='brown';
            coin=piece.substring(5,piece.length);
        }
        touchpiece.innerHTML=`<i class='fas fa-chess-${coin}' style='font-size:26px; color:${clr}'></i>`;
        if(twomove==2){
               // console.log(values,idies);
                let id1=document.getElementById(idies[0]);
                let id2=document.getElementById(idies[1]);         
                twomove=0;
                if(isPosibleMove(values,idies)){
                    id1.innerHTML=`<p></p>`;
                    id1.value="";
                    id2.innerHTML=`<i class='fas fa-chess-${coin}' style='font-size:36px; color:${clr}'></i>`;  
                    id2.value=piece;   
                    warn.innerText="Success move...!";
                    warn.style.color='green';
                    if(values[1]!=""){
                        let changeclr=clr;
                        if(clr=='blue')changeclr='brown';
                        else changeclr='blue';
                        let changepiece=values[1].replace('blue',"");
                        changepiece=changepiece.replace('brown',"");
                        if(clr=='brown'){                            
                            brownattack.innerHTML+=`<i class='fas fa-chess-${changepiece}' style='font-size:36px; color:${changeclr}'></i>`;
                        }
                        else{
                            blueattack.innerHTML+=`<i class='fas fa-chess-${changepiece}' style='font-size:36px; color:${changeclr}'></i>`;
                        }
                        console.log(1)
                    }
                    startGame();
                } 
                values=[]
                idies=[]          
        }
}

const stopgame =() =>{
    warn.innerText="Thank You...Please reload to play again";
    warn.style.color='green';
}

const isPosibleMove =(values,idies) =>{
    if(values[0]=='' || idies[0]==idies[1] || (values[0].substring(0,4) == 'blue' && values[1].charAt(1)=='l' ) || (values[0].substring(0,5) == 'brown' && values[1].charAt(1)=='r' )){
        warn.innerText="Invalid move...!";
        warn.style.color='red';
        return false;
    }
    let source=values[0];
    if(source.charAt(1)=='l' && turnfinder%2==0){
        warn.innerText="It's not your turn, its brown turn...!";
        warn.style.color='brown';
        return false;
    }
    if(source.charAt(1)=='r' && turnfinder%2!=0){
        warn.innerText="It's not your turn, its blue turn...!";
        warn.style.color='blue';
        return false;
    }
    let color='';
    if(source.charAt(1)=='l')color='blue';
    else color='brown';
   // console.log(color);
    let sourcepiece=values[0].replace(color,'');
    //console.log(sourcepiece);
    let sourceid=idies[0];
    let destid=idies[1];
    switch(sourcepiece){
        case 'pawn':
                    if((destid.charAt(1)=='8' || destid.charAt(1)=='1') && (sourceid.charAt(1)=='2' || sourceid.charAt(1)=='7') && sourceid.charAt(0)!=destid.charAt(0))
                    {
                        document.getElementById(sourceid).innerHTML=`<p></p>`; 
                        document.getElementById(sourceid).value="";                        
                        pawnToOtherpiece(destid , color);
                        startGame();
                        return false;
                    }
                    if(pawn(sourceid,destid,color))return true;
                    warn.innerText="Pawn can't move there ...!";
                    warn.style.color='red';
                    return false;
        case 'king':
                    if(king(sourceid,destid))return true;
                    warn.innerText="King can't move there ...!";
                    warn.style.color='red';
                    return false;
        case 'rook':
                    if(rook(sourceid,destid))return true;
                    warn.innerText="Rook can't move there ...!";
                    warn.style.color='red';
                    return false;
        case 'bishop':
                    if(bishop(sourceid,destid))return true;
                    warn.innerText="Bishop can't move there ...!";
                    warn.style.color='red';
                    return false;
        case 'queen' :
                    if(rook(sourceid,destid) || bishop(sourceid,destid))return true;
                    warn.innerText="Queen can't move there ...!";
                    warn.style.color='red';
                    return false;
        case 'knight' :
                    if(knight(sourceid,destid))return true;
                    warn.innerText="Knight can't move there ...!";
                    warn.style.color='red';
                    return false;

    }
    return true;
}

const pawn =(sourceid,destid,color) =>{
    let val=document.getElementById(destid);
    let sourcenum=sourceid.charAt(1);
    let destnum=destid.charAt(1);
    if(sourcenum==destnum)return false;
    if((Number(destnum)>Number(sourcenum) && color=='blue') || (Number(destnum)<Number(sourcenum) && color=='brown'))
    return false;
    if((sourcenum=='7' && destnum=='5' && sourceid.charAt(0)==destid.charAt(0)) || (sourcenum=='2' && destnum=='4' && sourceid.charAt(0)==destid.charAt(0)))
    return true;
    if((Number(sourcenum)+1==Number(destnum) && sourceid.charAt(0)==destid.charAt(0) && color=='brown') || (Number(sourcenum)-1==Number(destnum) && sourceid.charAt(0)==destid.charAt(0) && color=='blue'))
    { 
        if(val.value=="")return true;
    }
    if(sourceid.charCodeAt(0)+1  == destid.charCodeAt(0) || sourceid.charCodeAt(0)-1  ==destid.charCodeAt(0)){

        if(val.value!="")return true;
    }
    return false;
}

const king =(sourceid,destid) =>{
    let scnum=Number(sourceid.charAt(1));
    let dnum=Number(destid.charAt(1));
    let schar=sourceid.charCodeAt(0);
    let dchar=destid.charCodeAt(0);
    let val=Math.abs(Math.abs(scnum-dnum)-Math.abs(schar-dchar));
    if(val==1 || (val==0 && dchar==schar+1) || (val==0 && dchar==schar-1))return true;
   // console.log(Math.abs(scnum-dnum))
    return false;
}

const rook = (sourceid,destid) =>{
    let snum=Number(sourceid.charAt(1));
    let dnum=Number(destid.charAt(1));
    let schar=sourceid.charAt(0);
    let dchar=destid.charAt(0);
    let sccode=sourceid.charCodeAt(0);
    let dccode=destid.charCodeAt(0);
    if(snum==dnum || schar==dchar)
    {        
        for(let i=Number(snum)+1;i<Number(dnum);i++){
            let dummy=document.getElementById(schar+i);
            if(dummy.value!="")return false;
        }
        for(let i=Number(snum)-1;i>Number(dnum);i--){
            let dummy=document.getElementById(schar+i);
            if(dummy.value!="")return false;
        }
        for(let i=sccode+1;i<dccode;i++){
            let dummy=document.getElementById(String.fromCharCode(i)+snum);
            if(dummy.value!="")return false;
        }
        for(let i=sccode-1;i>dccode;i--){
            let dummy=document.getElementById(String.fromCharCode(i)+snum);
            if(dummy.value!="")return false;
        }
        return true;
    }
    return false;
}

const bishop = (sourceid,destid) =>{
    let snum=Number(sourceid.charAt(1));
    let dnum=Number(destid.charAt(1));
    let schar=sourceid.charCodeAt(0);
    let dchar=destid.charCodeAt(0);
    if(Math.abs(snum-dnum) == Math.abs(schar-dchar)){

        if((dnum>snum && dchar<schar)){
            for(let i=snum+1,j=schar-1;i<dnum;i++,j--){
                let dummy=document.getElementById(String.fromCharCode(j)+i);
                if(dummy.value!="")return false;
            }
        }
        else {
            for(let i=snum+1,j=schar+1;i<dnum;i++,j++){
                let dummy=document.getElementById(String.fromCharCode(j)+i);
                if(dummy.value!="")return false;
            }
        }
        if((dnum<snum && dchar>schar)){
            for(let i=snum-1,j=schar+1;i>dnum;i--,j++){
                    let dummy=document.getElementById(String.fromCharCode(j)+i);
                    if(dummy.value!="")return false;
            }
        }
        else{
            for(let i=snum-1,j=schar-1;i>dnum;i--,j--){
                let dummy=document.getElementById(String.fromCharCode(j)+i);
                if(dummy.value!="")return false;            
            }
        }
        return true;
    }
    return false;
}

const knight =(sourceid,destid) =>{
    let scnum=Number(sourceid.charAt(1));
    let dnum=Number(destid.charAt(1));
    let schar=sourceid.charCodeAt(0);
    let dchar=destid.charCodeAt(0);
    if((scnum+2==dnum && schar+1==dchar) || (scnum+2==dnum && schar-1==dchar) || (schar+2==dchar && scnum+1==dnum) || (schar+2==dchar && scnum-1==dnum))
    return true;
    if((scnum==dnum+2 && schar==dchar+1) || (scnum==dnum+2 && schar==dchar-1) || (schar==dchar+2 && scnum==dnum+1) || (schar==dchar+2 && scnum==dnum-1))
    return true;
    return false;
}

const pawnToOtherpiece =(destid , clr) =>{
    let piece=prompt("Enter which key u need.? King and pawn are not Allowed");
    piece=piece.toLowerCase();
    let location=document.getElementById(destid);
    if(piece.charAt(0)=='b')
     {
        location.innerHTML=`<i class='fas fa-chess-bishop' style='font-size:36px; color:${clr}'></i>`; 
        location.value=clr+"bishop";
     }
    else if(piece.charAt(0)=='r')
     {
        location.innerHTML=`<i class='fas fa-chess-rook' style='font-size:36px; color:${clr}'></i>`; 
        location.value=clr+"rook";
     }
    else if(piece.charAt(0)=='q')
    {
        location.innerHTML=`<i class='fas fa-chess-queen' style='font-size:36px; color:${clr}'></i>`; 
        location.value=clr+"queen";
    }
    else if(piece.charAt(0)=='k')
     {
        location.innerHTML=`<i class='fas fa-chess-knight' style='font-size:36px; color:${clr}'></i>`;     
        location.value=clr+"knight";
     }
     else pawnToOtherpiece(destid,clr);
}
