export default () => {
 
    const login = `
    <div class="overlay"></div>
    <section>
    <div class="contain-logo">
      <img class="logo" src="./images/logo.png" alt="">
    </div>
    <div class="login">
      <label class="em-pa" for="">E-mail:</label>
      <input class="space" type="email" placeholder="correo@correo.com" autocomplete="off" required>
      <label class="em-pa" for="">Password:</label>
      <input class="space" type="password" placeholder="Password" autocomplete="off" required><!--<i class="far fa-eye"> </i> --> <i class="far fa-eye-slash eye-sign"></i>
      <input class="check" type="checkbox">
      <label class="remember" for="">Remember me</label>
    </div>
    </section>
    <div class="buttons">
    <button class="log-in" type="submit"><a href="/#login">Log in</a> </button>
    </div>
    <div class="or">
      <p class="or-log">or</p>
    </div>
    <div class="buttons">
      <button class="goog goo-log" type="submit"><a href="/#login">Log in with Google</a> </button><i class="fab fa-google g-sign g-log"></i>
    </div>
    <div class="member">
      <p class="food">Not a foodiebook member?</p>
    </div>
    <div class="member">
      <p class="here"><a href="/#signup">Sign up here.</a></p>
    </div>
    `;
    const vistaLogin = document.createElement("div");
  vistaLogin.innerHTML = login;
  return vistaLogin;
  }