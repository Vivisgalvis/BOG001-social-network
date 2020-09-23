import { crear } from "../lib/functionsFireBase.js"
import  leerPost  from "../lib/functionsFireBase.js"


export const manejadorEvento = (e) => {
  e.preventDefault();
  
  crear(e.target);
}

export default () => {
    const crearPost = document.createElement ("div");
    const seccionPost = document.createElement("section");

    
    seccionPost.innerHTML = `
    <form id="formTimeLine">
    <div class="container">
    <h1>Agregar Post</h1>
   <textarea name="" id="posts" cols="30" rows="10"></textarea>
    <div class="buttons">
    <button id="btn-publicar" type="submit">Publicar</button>
    </div>
    <table class="table">
    <!--<thead>
      <tr>
        <th scope="col">Tus publicaciones</th>
        <th scope="col">Eliminar</th>
        <th scope="col">Editar</th>
        
      </tr>
    </thead>-->
    <section id="data">
    
    <section>
    </form> 
    `;
    
    crearPost.appendChild(seccionPost); 
    //const form = crearPost.querySelector("#formTimeLine");

     /* ------ LEER POST -------*/

    const data = crearPost.querySelector("#data");
    const leerPosts = leerPost(data,crearPost);
    crearPost.appendChild(leerPosts);


    /* ------ AGREGAR POST -------*/
  const btnPublicar = crearPost.querySelector("#btn-publicar")
    
btnPublicar.addEventListener ('submit',  manejadorEvento);



return crearPost
}
 /*export const manejadorEvento = (e) => {
  e.preventDefault();
  
  crear(e.target);
}*/

