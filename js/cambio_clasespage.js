var project = document.querySelector(".change-projects");
var page = document.querySelector(".todo")
var pageprojects = document.querySelector(".project-page")
var startpage = document.querySelector(".bienvenida") 


project.addEventListener("click", (e)=>{
    e.preventDefault();
    if(page.contains(e.target)){
    page.style.display = "none";
    pageprojects.style.display ="block";
    }
})