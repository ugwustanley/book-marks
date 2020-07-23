var quest = document.getElementsByClassName("quest");
var answers = document.getElementsByClassName("answers");
 for( var i=0;i<quest.length;i++){
     quest[i].addEventListener("click", slides);
      var z = i;
      
      function slides(e){
       
        if(e.target.style.transform != "rotate(180deg)" ){
          e.target.style.transform = "rotate(180deg)";
          e.target.parentNode.childNodes[5].style.display = "block"
          e.target.parentNode.childNodes[5].style.height = "auto"
        }else{
            e.target.style.transform = "rotate(360deg)";
            e.target.parentNode.childNodes[5].style.display = "none";
          
        }
      }
 }
 let loader = document.getElementById('loader');

 document.body.style.overflowY = "hidden";

  window.onload = function() {myFunction()};

  function myFunction() {
    if(loader){
      document.body.style.overflowY = "auto";
      loader.style.display = "none";
    }else{
        loader.style.display = "none";
    }
}
 var opt2 =  document.querySelector("#opt2");
 var opt1=  document.querySelector("#opt1");
 var swap = document.querySelector(".swap");
 opt1.addEventListener("click" , opti1 );

 opt2.addEventListener("click" , opti2 );

  function opti2(){
    
      swap.style.animationName = "swaps";
      opt2.style.borderWidth = 3 + "px";
      opt1.style.borderWidth = 1 + "px";
      opt3.style.borderWidth = 1 + "px";
      opt1.style.borderColor = "gray";
      opt3.style.borderColor = "gray";
      opt2.style.borderColor = "hsl(0, 94%, 66%)";
      var swapee = `<div class="sect2-box mt-5" style="width:100%;min-height:400px;margin-top:50px">
      <div class="home21 pt-4" style="max-width:650px">
        <img src="./images/illustration-features-tab-2.svg" class="sect2-img" style="width:100%;padding-left:100px;" alt="">
        <div class="back-curve1"></div>
     </div>
      <div class="home22 ml-5" style="max-width:500px">
        <h1>Intelligent search</h1>
        <p> Our powerful search feature will help you find saved sites in no time at all. 
        No need to trawl through all of your bookmarks.</P>
        <button class="btn sect2-btn">More Info</button>
       </div>
    </div>`;
    swap.innerHTML  = swapee ; 
   
  }

  var opt3 =  document.querySelector("#opt3");

 opt3.addEventListener("click" , opti3 );

  function opti3(){
   
    opt3.style.borderWidth = 3 + "px";
    opt1.style.borderWidth = 1  + "px";
    opt2.style.borderWidth = 1 + "px";
    opt1.style.borderColor = "gray";
    opt2.style.borderColor = "gray";
    swap.style.animationName = "swapss";
    opt3.style.borderColor = "hsl(0, 94%, 66%)";
    var swapee = `<div class="sect2-box mt-5" style="width:100%;min-height:400px;margin-top:50px">
    <div class="home21 pt-4" style="max-width:650px">
      <img src="./images/illustration-features-tab-3.svg" class="sect2-img" style="width:100%;padding-left:100px;" alt="">
      <div class="back-curve1"></div>
   </div>
    <div class="home22 ml-5" style="max-width:500px">
      <h1>Share your bookmarks</h1>
      <p> Easily share your bookmarks and collections with others. Create a shareable 
      link that you can send at the click of a button.</p>
        <button class="btn sect2-btn">More Info</button>
     </div>
  </div>`;
  swap.innerHTML  = swapee ; 

}


 

  function opti1(){

    swap.style.animationName = "swapsss";
    opt1.style.borderWidth = 3 + "px";
    opt3.style.borderWidth = 1 + "px";
    opt2.style.borderWidth = 1 + "px";
    opt2.style.borderColor = "gray";
    opt3.style.borderColor = "gray";
    opt1.style.borderColor = "hsl(0, 94%, 66%)";
    var swapee = `<div class="sect2-box mt-5" style="width:100%;min-height:400px;margin-top:50px">
    <div class="home21 pt-4" style="max-width:650px">
      <img src="./images/illustration-features-tab-1.svg" class="sect2-img" style="width:100%;padding-left:100px;" alt="">
      <div class="back-curve1"></div>
   </div>
    <div class="home22 ml-5" style="max-width:500px">
      <h1>Bookmark in one click</h1>
      <p> Organize your bookmarks however you like. Our simple drag-and-drop interface 
        gives you complete control over how you manage your favourite sites.</p>
        <button class="btn sect2-btn">More Info</button>
     </div>
  </div>`;
  swap.innerHTML  = swapee ; 

}
var desktop =  document.querySelector(".destop");
var close =  document.querySelector(".pop-close");
var main =  document.querySelector("#main");
var open =  document.querySelector(".pop-open");
var nav =  document.querySelector(".nav-show");
 
 function opens(){
   nav.style.display = "block";
   main.style.height = "100vh";
   document.body.style.overflowY = "hidden";
 }
 close.addEventListener("click" , closes);
 function closes(){
     nav.style.display = "none";
     document.body.style.overflowY = "auto";
     main.style.height = "auto";
 }