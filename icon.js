const menubarTag = document.querySelector(".menubar");
const overlaycontainerTag = document.querySelector(".overlaycontainer");
const line2Tag = document.querySelector(".line2");
const line1Tag = document.querySelector(".line1");
const line3Tag = document.querySelector(".line3");
const rgihtTag = document.querySelector(".rgiht");
const buttonTag = document.querySelector(".button");

menubarTag.addEventListener("click", () => {
    if(menubarTag.classList.contains("changeicon")){
        line2Tag.classList.remove("lineup2");
        line1Tag.classList.remove("lineup1");
        line3Tag.classList.remove("lineup3"); 
        menubarTag.classList.remove("changeicon")
        overlaycontainerTag.classList.remove("overlay");
        rgihtTag.classList.remove("right1");
        buttonTag.classList.remove("botot");
  
    }else{
        line2Tag.classList.add("lineup2");
        line1Tag.classList.add("lineup1");
        line3Tag.classList.add("lineup3");
        menubarTag.classList.add("changeicon")
        overlaycontainerTag.classList.add("overlay");
        rgihtTag.classList.add("right1");
        buttonTag.classList.add("botot");
 
    }
   
})