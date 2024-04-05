

const HomeBtn=document.getElementById("homeMobBtn");
const HomePop=document.getElementById("Home-popup");
HomeBtn.addEventListener("click",()=>{
  
HomePop.classList.toggle('homeOPEN');
}); 



document.addEventListener("DOMContentLoaded", function() {
    var homeTextBox = document.getElementById("homeText");
    var homeImgBox = document.getElementById("homeImg");
    homeTextBox.classList.add("animate");
    homeImgBox.classList.add("animate");
     // Add the class to trigger the animation
    homeTextBox.style.left = "0";
    homeImgBox.style.right = "0";
     // Set the left position to move the box to the specified position
  });
  













