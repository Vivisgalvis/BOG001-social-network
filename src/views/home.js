import router from "../router.js";

export default () => {
  
  const home = `
      <div class="overlay"></div>
    <section>
    <div class="contain-logo">
    <img class="logo" src="./images/logo.png" alt="">
    </div>
    <div class="text">
      <p class="text-1">What are you waiting for...</p>
    </div>
    <div class="text">
      <p class="text-2">Join more foodies like you!</p>
    </div>
    </section>
    <div class="btns">
      <button class="sign" type="submit"><a href="/#signup">sign up</a> </button>
      <button class="log" type="submit"><a href="/#login">log in</a> </button>
    </div> 
`;
  const vistaInicio = document.createElement("div");
  vistaInicio.innerHTML = home;
  return vistaInicio;
};


