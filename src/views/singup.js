export default () => {
  // render: async () => {
    const signUp = `
    <div class="overlay"></div>
    <section>
      <div class="contain-logo">
      <img class="logo" src="./images/logo.png" alt="">
      </div>
      <div class="sign-up">
        <label class="em-pa" for="">Name:</label>
        <input class="space" type="text">
        <label class="em-pa" for="">Last Name:</label>
        <input class="space" type="text">
        <label class="em-pa" for="">E-mail:</label>
        <input class="space" type="text">
        <label class="em-pa" for="">Password:</label>
        <input class="space" type="password"> <!--<i class="far fa-eye"> </i> --> <i class="far fa-eye-slash eye-sign"></i>
        <!-- <label class="em-pa" for="">your age:</label>
        <input class="space" type="text"> -->
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
          <p class="here he-sign">Log in here.</p>
        </div>
        
  `;
  const vistaSign = document.createElement("div");
  vistaSign.innerHTML = signUp;
  return vistaSign;
  }
// };

// export default signup;
