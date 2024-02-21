let icons = document.querySelectorAll(".icon");
let menuCards = document.querySelectorAll(".flyIn");
let parent = document.getElementById("parent");


parent.addEventListener("click", flyinMenuFunction)

function flyinMenuFunction(event){
    let userTarget = event.target;
    let flyinMenu = userTarget.parentElement.parentElement.lastElementChild;

    if (!userTarget.classList.contains("fa-ellipsis-vertical")){
        returnAll()
    } else if (flyinMenu.classList.contains("fly-in-menu")) {
        returnAll()
        flyinMenu.classList.replace("fly-in-menu", "fly-in-menu-new")
    } else if (flyinMenu.classList.contains("fly-in-menu-new")) {
        returnAll()
        flyinMenu.classList.replace("fly-in-menu-new", "fly-in-menu")
    }
} 
function returnAll() {
   menuCards.forEach((card) => {
    card.classList.remove("fly-in-menu-new");
    card.classList.add("fly-in-menu");
   })
}
