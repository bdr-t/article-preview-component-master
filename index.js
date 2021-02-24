const shareBtn = document.getElementById("share-btn");
const shareBtnDesktop = document.getElementById("share-btn-desktop");
const author = document.getElementById("author");
const exitSahreButton = document.getElementById("exitSahreButton");
const social = document.getElementById("social");
const socialDesktop = document.getElementById("social-desktop");
const triangle = document.getElementById("triangle");

shareBtn.addEventListener("click", () => {
  console.log('haha')
  author.classList.add("author-hide");
  social.classList.remove("social-hide");
});

exitSahreButton.addEventListener("click", () => {
  author.classList.remove("author-hide");
  social.classList.add("social-hide");
});

if(screen.width >= 768){
  console.log('haha')
  author.classList.remove("author-hide")
}


shareBtnDesktop.addEventListener('click', ()=>{
  // socialDesktop.classList.add('hide')
  // triangle.classList.add('hide-triangle')
  console.log(socialDesktop.classList.value.match('esconder'))
  if(socialDesktop.classList.value.match('esconder')){
    socialDesktop.classList.remove('esconder')
    triangle.classList.remove('esconder-triangle')
  } else{
    socialDesktop.classList.add('esconder')
    triangle.classList.add('esconder-triangle')
  }
  console.log(socialDesktop.classList.value)
  
})