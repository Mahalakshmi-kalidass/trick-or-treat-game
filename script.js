function _(selector){
  return document.getElementById(selector);
}
const INTRO = _("Introduction");
const TRICK = _("trickbox");
const PLAYBTN = _("play");
const PLAYAGN = _("playAgain");
let imgArray = [
  "https://myfoodbook.com.au/sites/default/files/styles/single_recipe/public/recipe_photo/Baked%20Ricotta%20Rapsberry%20Puddings.jpg","https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1163514_11-86c1f82.jpg?quality=90&resize=440,400",
  "https://assetsnffrgf-a.akamaihd.net/assets/m/502013285/univ/art/502013285_univ_lsr_xl.jpg" 
  ]
let img;
let random;
let count=0;

function startGame(){
  console.log("am")
  //on starting the game hiding the introduction
  INTRO.style.display="none";
  //showing the trickbox
  TRICK.style.display="block";
  //changing start to good luck
  PLAYBTN.innerText="Good luck!"
  

}

//selecting the image to show
function imageSelector(){

  random = Math.round(Math.random()*2);
  console.log(random);
  img = imgArray[random];
  
}
//onclick reveal the picture
function reveal(ele){
  imageSelector();
  ele.innerHTML="<img src="+img+" style='width:250px ;height:375px; margin:5px;'/>";
  PLAYBTN.style.display="none";
  count++;
  console.log(count);
  status();
} 
//disable button
function disablebtn(){
 
    _("btn1").disabled="true";
    _("btn2").disabled="true";
    _("btn3").disabled="true";
    
  
}
//game over
function gameOver(){
 PLAYAGN.innerText="Game over!playAgain"
}
//show the game status
function status(){
 
  if(count==3 && random!=2 || count==3 && random==2){
    PLAYAGN.innerText="you won! playAgain" 
    console.log("won");
    disablebtn();
  }
  else if(random == 2){
    console.log("gameover");
    disablebtn();
    PLAYAGN.style.display="block";
    gameOver();
  }
  else{
    console.log("move");
    PLAYAGN.innerText="Good Move!"
    PLAYAGN.style.display="block";
  }
}
//playAgain
function playAgain(){
  console.log("playagain")
  PLAYBTN.style.display="block";
  PLAYAGN.style.display="none";
  startGame();
  count=0;
  _("btn1").innerHTML='  <img src="https://www.history.com/.image/t_share/MTY3NDg4OTU3NjQxMTQwMDEz/halloween-gettyimages-172988453.jpg" class="image"/>'
  _("btn2").innerHTML='  <img src="https://www.history.com/.image/t_share/MTY3NDg4OTU3NjQxMTQwMDEz/halloween-gettyimages-172988453.jpg" class="image"/>'
  _("btn3").innerHTML='  <img src="https://www.history.com/.image/t_share/MTY3NDg4OTU3NjQxMTQwMDEz/halloween-gettyimages-172988453.jpg" class="image"/>'
 enableBtn();
}
function enableBtn(){
  _("btn1").disabled=false;
  _("btn2").disabled=false;
  _("btn3").disabled=false;
}