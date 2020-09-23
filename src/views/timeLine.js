import { crear } from "../lib/functionsFireBase.js"
import  leerPost  from "../lib/functionsFireBase.js"


export default () => {
    const crearPost = document.createElement ("div");
    const seccionPost = document.createElement("section");

    
    seccionPost.innerHTML = `
    <form id="formTimeLine">
    <div class="container">
    <h1>Agregar Post</h1>
    <!--<input type="text" id="posts" placeholder="Que estas pensando!!!" autocomplete="off">-->
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
    const form = crearPost.querySelector("#formTimeLine");

     /* ------ LEER POST -------*/

    const data = crearPost.querySelector("#data");
    const leerPosts = leerPost(data,crearPost);
    crearPost.appendChild(leerPosts);


    /* ------ AGREGAR POST -------*/

form.addEventListener ('submit', (e) => {
    e.preventDefault();
    const post = form.posts.value;
    crear(form);
});

<<<<<<< HEAD
    /* ------ PUBLICAR POST -------*/
=======
   /* ------ ELIMINAR POSTS -------*/
>>>>>>> 6896907a4a61b7213b5edeeb636e65d4be0bb54f

  

    return crearPost
}

