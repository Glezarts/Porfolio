var bienvenida, startpage, page, botonabout, botoncontact, project, page, pageprojects
bienvenida = document.querySelector(".gotopage")
startpage = document.querySelector(".bienvenida") 
page = document.querySelector(".todo")
botonabout = document.querySelector(".change-about")
botoncontact = document.querySelector(".change-contact")
project = document.querySelector(".change-projects");
page = document.querySelector(".todo")
pageprojects = document.querySelector("#project-page")


bienvenida.addEventListener("click", (e)=>{
    pageprojects.style.display= "none";
    e.preventDefault();
    if(startpage.contains(e.target)){
    startpage.style.height = "0";
    page.style.display ="block";
    bienvenida.style.display="none";
    }
})




project.addEventListener("click", (e)=>{
    startpage.style.height = "0";
    e.preventDefault();
    if(page.contains(e.target)){ 
        page.style.display = "none";
        pageprojects.style.display ="block";
    } 
})



botonabout.addEventListener("click", (e)=>{
    startpage.style.height = "0";
    e.preventDefault();
    if(pageprojects.contains(e.target)){ 
        location.href ="index.html#about"
        pageprojects.style.display = "none";
        page.style.display ="block";
        startpage.style.display = "none";
    } 
})

botoncontact.addEventListener("click", (e)=>{
    startpage.style.height = "0";
    e.preventDefault();
    if(pageprojects.contains(e.target)){ 
        location.href ="index.html#contact"
        pageprojects.style.display = "none";
        page.style.display ="block";
        startpage.style.display = "none";

    } 
})
window.addEventListener("click", (e) => {
    if (!bienvenida.contains(e.target)) {
        startpage.style.height = "0";
        page.style.display ="block";
        bienvenida.style.display="none";
    
    }
})