let footerYear = document.querySelector(".footer-year");
if(footerYear){
    footerYear.textContent= new Date().getFullYear();
};

//theme-toggle
let themebtn = document.querySelector(".theme-toggle");
//we don't have any backend databases to store the items
//so we are storing the items in a browsers storage called as localStorage
localStorage.setItem("theme", "dark");
if(localStorage.getItem("theme")==="dark"){
    document.body.classList.add("dark-theme");
    themebtn.textContent = "🌛";
}else{
    themebtn.textContent= "🌞";
}
themebtn.addEventListener("click", function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        themebtn.textContent= "🌛";
    }else{
        themebtn.textContent= "🌞";
        localStorage.setItem("theme", "light");
    }
});

