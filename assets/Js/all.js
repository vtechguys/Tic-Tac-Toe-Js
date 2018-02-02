
//  var buttonArray;
// window.addEventListener("load",bindEvents);
// function bindEvents(){
//     console.log("Bind Events Enrty");
//     buttonArray = document.getElementsByName("button");
//     //HTML Collection returned to buttonArray,buttonArray is now a array storing all btn
//     for(let i=0;i<buttonArray.lenght;i++){
//         buttonArray[i].addEventListener("click",isZeroOrX)
//     }
// }
// var turn=false;//false=X else true 0
// function isZeroOrX(){
//     var btnText=this.innerHTML;
//     if(!btnText){
//         this.innerHTML="ON";
//         turn=!turn;
//         //doucument.getElementById("gameOver").innerHTML=isGameOver()?"Game Over":"";

//     }
   
// }
// function isSameRow(firstBtn,secndBtn,thirdBtn){
//    if(isBlankMap(firstBtn,secndBtn,thirdBtn))
//        { return false;
//        }
//     return one.innerHTML ===two.innerHTML && one.innerHTML===three.innerHTML;
// }

// function isBlankMap(firstBtn,secndBtn,thirdBtn){
//     return isBtnBlank(firstBtn) && isButtonBlank(secndBtn) && isButtonBlank(thirdBtn);
//     }
//     function isBtnBlank(button){
//     return button.innerHTML.trim().length==0?true:false;
//     }







// function isGameOver(){
//     //Row check
//     if(isSameRow(buttonArray[0],buttonArray[1],buttonArray[2]))
//         return true;
//     if(isSameRow(buttonArray[3],buttonArray[4],buttonArray[5]))
//         return true;
//     if(isSameRow(buttonArray[6],buttonArray[7],buttonArray[8]))
//         return true;
//      //column check
//     if(isSameColumn(buttonArray[0],buttonArray[3],buttonArray[6]))
//         return true;
//     if(isSameColumn(buttonArray[1],buttonArray[4],buttonArray[7]))
//         return true;
//     if(isSameColumn(buttonArray[2],buttonArray[5],buttonArray[8]))
//         return true;
//     //Diagonal check
//     if(isDiagonal(buttonArray[0],buttonArray[4],buttonArray[8]))
//         return true;
//     if(isDiagonal(buttonArray[2],buttonArray[4],buttonArray[6]))
//         return true;
// }
var buttonArray ;
window.addEventListener("load",()=>
{
     buttonArray = document.getElementsByTagName("button");
    /*for(let i = 0; i<buttonArray.length; i++){
        buttonArray[i].addEventListener("click",isZeroOrX);
    }*/
    Array.prototype.forEach.call(buttonArray,(button)=>button.addEventListener("click",isZeroOrX));
});
var isXorZeroFlag = false;
function isZeroOrX(){
    var buttonText = this.innerHTML;
    if(!buttonText){
    this.innerHTML = isXorZeroFlag?"X":"0";
    
    var winStatus=isXorZeroFlag?"X":"0";
    isXorZeroFlag = !isXorZeroFlag;
    document.querySelector("#gameover").innerHTML =isGameOver()?("Game Over Winner is " + winStatus):"";
    
    }
}

function isSame(one,two,three){
    if(isBlank(one,two,three)){
        return false;
    }
    return one.innerHTML ===two.innerHTML && one.innerHTML===three.innerHTML;
}

function isBlank(one,two,three){
return isButtonBlank(one) && isButtonBlank(two) && isButtonBlank(three);
}
function isButtonBlank(button){
return button.innerHTML.trim().length==0?true:false;
}

function isGameOver(){
    //row check
    if(isSame(buttonArray[0],buttonArray[1],buttonArray[2])){
        return true;
    }
    if(isSame(buttonArray[3],buttonArray[4],buttonArray[5]))
        return true;
    if(isSame(buttonArray[6],buttonArray[7],buttonArray[8]))
        return true;
     //column check
    if(isSame(buttonArray[0],buttonArray[3],buttonArray[6]))
        return true;
    if(isSame(buttonArray[1],buttonArray[4],buttonArray[7]))
        return true;
    if(isSame(buttonArray[2],buttonArray[5],buttonArray[8]))
        return true;
    //Diagonal check
    if(isSame(buttonArray[0],buttonArray[4],buttonArray[8]))
        return true;
    if(isSame(buttonArray[2],buttonArray[4],buttonArray[6]))
        return true;




    return false;
}