import { crear } from "../lib/functionsFireBase.js";
import leerPost from "../lib/functionsFireBase.js"; //export default
import { exit } from "../lib/functionsFireBase.js";

export const manejadorEvento = (e) => {
  e.preventDefault();

  crear(e.target);
};

export default () => {
  const crearPost = document.createElement("div");
  const seccionPost = document.createElement("section");

  seccionPost.innerHTML = `
  <div class="overlay"></div>
    <div class="wrapper">
      <input type="checkbox" id="btn" hidden>
      <label for="btn" class="menu-btn">
        <i class="fas fa-bars"></i>
        <i class="fas fa-times"></i>
      </label>
      <nav id="sidebar">
        <div class="title">FoodieBook</div>
            <ul class="list-items">
                <li><a href="#"><i class="fas fa-home"></i>Home</a></li>
                <li><a href="#"><i class="fas fa-user"></i>Profile</a></li>
                <li id="logOut"><a href="#login"><i class="fas fa-sign-out-alt"></i>log out</a></li>
                <div class="icons">
                    <p>Copyright ©️ 2020 Made by -MAVINA </p>
                </div>
            </ul>
      </nav>
    </div>
    <div class="containerTimeline">
      <form id="formTimeLine" class="form-timeline">
        <h1 class="titulo-post">Agregar Post</h1>
    <textarea name="" id="posts" cols="40" rows="3"></textarea>
    <div class="buttons">
    <button class="btnPost" id= "btn-publicar" type="submit">Publicar</button>
    <button class="btnpost" id="btn-actualizar" type="submit" style='display:none' >Editar</button>
    </form>
    </div>
    <section id="data">
    </section>
    `;

  crearPost.appendChild(seccionPost);

  /* ------ LEER POST -------*/

  const data = crearPost.querySelector("#data");
  const leerPosts = leerPost(data, crearPost);
  crearPost.appendChild(leerPosts);

  /* ------ AGREGAR POST -------*/

  const btnPublicar = crearPost.querySelector("#btn-publicar");

  btnPublicar.addEventListener("click", manejadorEvento);

  /*---- LOG OUT ----*/

const logOut = crearPost.querySelector("#logOut");

  logOut.addEventListener('click', () => {
    exit();
    window.location.hash = "#login";
  });

  return crearPost;
};


