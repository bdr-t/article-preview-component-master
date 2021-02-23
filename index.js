const shareBtn = document.getElementById("share-btn");
const author = document.getElementById("author");
const exitSahreButton = document.getElementById("exitSahreButton");
const social = document.getElementById("social");
const socialDesktop = document.getElementById("social-desktop");
const triangle = document.getElementById("triangle");


if (screen.width >= 768){
    shareBtn.addEventListener('click',()=>{
        console.log('haha')
    })
} else{
    shareBtn.addEventListener("click", () => {
        author.classList.add("author-hide");
        social.classList.remove("social-hide");
      });
      
      exitSahreButton.addEventListener("click", () => {
        author.classList.remove("author-hide");
        social.classList.add("social-hide");
      });
}