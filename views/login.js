import { logueo, signUpGoo } from "../lib/functionsFireBase.js";

export default () => {
  const loginUsuario = document.createElement("div");
  const seccionLogUsuario = document.createElement("section")

  seccionLogUsuario.innerHTML = `
  <form id="formLogin">
  <div class="overlay"></div>
  <section>
  <div class="contain-logo">
    <img class="logo" src="./images/logo.png" alt="">
  </div>
  <div class="login">
    <label class="em-pa" for="">E-mail:</label>
    <input id="emailLog"class="space" type="email" placeholder="correo@correo.com" autocomplete="off" required>
    <label class="em-pa" for="">Password:</label>
    <input id="passLogin"class="space" type="password" placeholder="Password" autocomplete="off" required> <span class="eye">
    <i class="fas fa-eye-slash" id="eye-close"></i> <i class=" fa-eye fas" id="eye-open" style="display:none"></i>
    </span>
    </span>
    <input class="check" type="checkbox">
    <label class="remember" for="">Remember me</label>
  </div>
  </section>
  <div class="buttons">
  <button class="log-in" type="submit">Log in</button>
  </div>
  <div class="or">
    <p class="or-log">or</p>
  </div>
  <div class="buttons">
    <button id="gooLogin" class="goog goo-log" >Log in with Google</button><i class="fab fa-google g-sign g-log"></i>
  </div>
  <div class="member">
    <p class="food">Not a foodiebook member?</p>
  </div>
  <div class="member">
    <p class="here"><a href="/#signup">Sign up here.</a></p>
  </div>
  </form> 
  `;
  loginUsuario.appendChild(seccionLogUsuario);
  const form = loginUsuario.querySelector("#formLogin");

  /* ------ OCULTAR/MOSTRAR CONTRASEÑA -------*/

  const togglePassword1 = () => {
    const pwd = loginUsuario.querySelector('#passLogin');
    const eyeOpen = loginUsuario.querySelector('#eye-open');
    const eyeClose = loginUsuario.querySelector('#eye-close');

    if (pwd.type === 'password') {
      pwd.type = 'text';
      eyeOpen.style.display = 'block';
      eyeClose.style.display = 'none';
    } else {
      pwd.type = 'password';
      eyeOpen.style.display = 'none';
      eyeClose.style.display = 'block';
    }
  };
  const eyeIcons = loginUsuario.querySelector('.eye');
  eyeIcons.addEventListener('click', togglePassword1);


  /* ------ INGRESAR A LA APLICACION -------*/

  form.addEventListener('submit', (e) => {
    //console.log(e)
    e.preventDefault();
    // const emailLog = form.emailLog.value;
    // const passwordLog = form.passLogin.value;
    const emailLog = form.querySelector('#emailLog').value;
    const passwordLog = form.querySelector('#passLogin').value;
    logueo(emailLog, passwordLog);
  });

  /* ------ INGRESAR CON GOOGLE -------*/
  
  const google = loginUsuario.querySelector("#gooLogin");

  google.addEventListener('click', (e) => {
    e.preventDefault();
    //console.log(signUpGoo)
    signUpGoo();

  });
  return loginUsuario;
}


