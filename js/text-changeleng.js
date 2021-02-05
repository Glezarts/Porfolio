const copy = {
    profesion:{esp:"Diseñadora gráfica y web",
               eng: "Graphic designer and web",

              },
    about:    {esp: `<h2>Hola</h2>
              <p> Mi nombre es Eva, pseudónimo 'Glezart', tengo 26 años. Mis estudios específicos comienzan con el Grado de Bellas Artes, en la Universidad de Vigo. Continúa con el Ciclo superior de Gráfica publicitaria, en Escola Llotja - Barcelona. Actualmente estoy realizando un curso enfocado a programación web gracias al programa Singulars 2020 de Pimec en Bit Computer Training by Netmind.</p> 
            
              <p>Me declaro amante del arte, en todas sus ramas. Mis expectativas profesionales se enfocan a ser Diseñadora Web y de, más específicamente enfocado a front-end y a UI-UX. </p>
              <p> Entre uno de mis muchos hobbies, el más destacado, se encuentra mi aficción por el maquillaje y la fotografía enfocada a ello y la pintura. </p> 
              <p>Soy persona de café en mano y charlar de la vida, proyectos, lo que sea en general... De ahí sale la mejor inspiración. </p> 
              <p>Que dices, ¿Nos hacemos un café? </p><h3>Más información</h3>`,
              eng: `<h2>Hi</h2>
              <p> My name is Eva, pseudonym 'Glezart', I am 26 years old. My specific studies begin with the Bachelor of Fine Arts, at the University of Vigo. It continues with the upper Cycle of Advertising Graphics, at Escola Llotja - Barcelona. I am currently taking a course focused on web programming thanks to Pimec's Singulars 2020 program at Bit Computer Training by Netmind.</p>
              <p>I declare myself a lover of art, in all its branches. My professional expectations are focused on being a Web Designer and on, more specifically focused on front-end and UI-UX.</p>
              <p> Among one of my many hobbies, the most prominent, is my love of makeup and photography focused on it and painting.</p>
              <p>I am a person with coffee in hand and talk about life, projects, whatever in general ... That's where the best inspiration comes from.</p>
              <p>What do you say, can we make a coffee? </p><h3>More information</h3>`,
              },
    
    botonescribeme: {
              esp: "Escríbeme",
              eng: "Write me here"
              },

    botonprojects:{
              esp:"Mira mis trabajos",
              eng:"My projects",
              },

    botoncontact:{
              esp:"Contáctame",
              eng:"Contact me",
              },
    enlace1: {
              esp:"Sobre mi",
              eng:"About me",
             },
    enlace2: {
              esp:"Projectos",
              eng:"Projects",
             },

    enlace3: {
              esp:"Contacto",
              eng:"Contact",
             },
    contacto:{
              esp:"CONTACTO",
              eng:"CONTACT",
    },
    enlace1pie: {
        esp:"SOBRE MI",
        eng:"ABOUT ME",
       },
    enlace2pie: {
        esp:"PROYECTOS",
        eng:"PROJECTS",
       },

    enlace3pie: {
        esp:"CONTACTO",
        eng:"CONTACT",
       },
    derechos:{
        esp:"&copy; 2020 Glezart &#124; Todos los derechos reservados",
        eng:"&copy; 2020 Glezart &#124; All rights reserved",
    },

}

 var checkboxswitch = document.querySelector("#lang");

 checkboxswitch.addEventListener("click",()=>{
     if(checkboxswitch.checked){
         lang("eng");
     }else{
        lang("esp");
     }
 })



function lang(inputValue) {
    for (const id in copy) {  // recorre les propietats de l'objecte copy
        document.querySelector(`#${id}`).innerHTML = copy[id][inputValue];// copy.id.buttonValue
    }
}