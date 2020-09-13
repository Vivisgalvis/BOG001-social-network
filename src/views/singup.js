import { registrar } from '../lib/functionsFireBase.js'
 
export default () => {
  const crearUsuario = document.createElement ("div");
  const seccionUsuario = document.createElement("section");

  seccionUsuario.innerHTML = `
    <form id="formSign">
    <div class="overlay"></div>
    <section>
      <div class="contain-logo">
      <img class="logo" src="./images/logo.png" alt="">
      </div>
      <div class="sign-up">
        <label class="em-pa" for="">Name:</label>
        <input id="name"class="space" type="text" placeholder="Pepito" autocomplete="off" required>
        <label class="em-pa" for="">Last Name:</label>
        <input id="lastName" class="space" type="text" placeholder="Perez" autocomplete=off" required>
        <label class="em-pa" for="">E-mail:</label>
        <input id="email" class="space" type="text" placeholder="correo@correo.com" autocomplete="off" required>
        <label class="em-pa" for="">Password:</label>
        <input id="password" class="space" type="password" placeholder="Password" autocomplete="off" required> <!--<i class="far fa-eye"> </i> --> <i class="far fa-eye-slash eye-sign"></i>
      </div>
      </section> 
      <div class="buttons">
        <button class="btn-sign" type="submit"><a href="/#signup">Sign Up</a> </button>
        </div>
        <div class="or">
          <p class="or-sign or-log">or</p>
        </div>
        <div class="buttons">
          <button class="goog goo-sign" type="submit"><a href="/#login">Sign up with Google</a> </button><i class="fab fa-google g-sign"></i>
        </div>
        <div class="member">
          <p class="food fo-sign">Already a foodiebook member?</p>
        </div>
        <div class="member">
          <p class="here he-sign"><a href="/#login">Log in here.</a></p>
        </div>
    </form>   
  `;
  
  crearUsuario.appendChild(seccionUsuario);
  const form = crearUsuario.querySelector("#formSign");
  
  form.addEventListener ('submit', (e) => {
    console.log(e)
    e.preventDefault();
    const name = form.name.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(registrar)
    registrar(email, password);
    
    window.location.hash = "#welcome";
  });

 
  return crearUsuario;
}

