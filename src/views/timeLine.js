import { crear, publicar } from "../lib/functionsFireBase.js"

export default () => {
    const crearPost = document.createElement ("div");
    const seccionPost = document.createElement("section");

    
    seccionPost.innerHTML = `
    <form id="formTimeLine">
    <div class="container">
    <h1>Agregar Post</h1>
    <input type="text" id="posts" placeholder="Que estas pensando!!!" autocomplete="off">
    <div class="buttons">
    <button id="btn-publicar" type="submit">Publicar</button>
    </div>
    <table class="table">
    <thead>
      <tr>
        <th scope="col">Tus publicaciones</th>
        <th scope="col">Eliminar</th>
        <th scope="col">Editar</th>
        
      </tr>
    </thead>
    <section id="data">
    <div class="container-post">
    <textarea name="" id="texPosts" cols="30" rows="10"></textarea>
    <button id="btn-editar" class="editar">Editar</button>
    </div>
    <section>
    </form> 
    `;
    
    crearPost.appendChild(seccionPost); 
    const form = crearPost.querySelector("#formTimeLine");

    /* ------ AGREGAR POST -------*/

form.addEventListener ('submit', (e) => {
    e.preventDefault();
    const post = form.posts.value;
    crear(form);
});

     /* ------ PUBLICAR POST -------*/

const btnEditar = crearPost.querySelector("#btn-editar");
const data = form.querySelector("#data");

    btnEditar.addEventListener('click', (e) => {
        e.preventDefault();
        //console.log(signUpGoo)
        publicar(form,data);
        
      });
    return crearPost
}

