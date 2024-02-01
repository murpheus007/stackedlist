let icons = document.querySelectorAll(".icon");
let menuCards = document.querySelectorAll(".flyIn");

function returnAll() {
   menuCards.forEach((card) => {
    card.classList.remove("fly-in-menu-new");
    card.classList.add("fly-in-menu");
   })
}

icons.forEach((icon, index) => {
    icon.addEventListener("click", function () {
        
        
        let menuCard = menuCards[index];
        if (menuCard.classList.contains("fly-in-menu")) {
            returnAll();
            menuCard.classList.remove("fly-in-menu");
            menuCard.classList.add("fly-in-menu-new");
            console.log(menuCard)
        } else if (menuCard.classList.contains("fly-in-menu-new")) {
            returnAll();
            menuCard.classList.remove("fly-in-menu-new");
            menuCard.classList.add("fly-in-menu");
        }
    });
});
