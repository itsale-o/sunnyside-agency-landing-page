const menuButton = document.getElementById("menu-button");
const menuMobile = document.getElementById("menu-mobile");

menuMobile.style.display = "none";

menuButton.onclick = function(){
    if(menuMobile.style.display == "none"){
        menuMobile.style.display = "block";
    }else{
        menuMobile.style.display = "none";
    };
};
