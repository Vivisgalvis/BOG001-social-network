const login = {
  render: async () => {
    const view = `
    <div class="contain">
      <img class="cont-img" src="./images/foodie2.jpeg" alt="">
    </div>
    <section>
    <div class="contain-logo">
      <img class="logo" src="./images/logo.png" alt="">
    </div>
    <div class="login">
      <label class="em-pa" for="">e-mail:</label>
      <input class="space" type="text">
      <label class="em-pa" for="">password:</label>
      <input class="space" type="password">
      <input class="check" type="checkbox">
      <label class="remember" for="">remember me</label>
    </div>
    </section>
    <div class="buttons">
    <button class="log-in" type="submit"><a href="/#login">log in</a> </button>
    </div>
    <div class="or">
      <p>or</p>
    </div>
    <div class="buttons">
      <button class="goog" type="submit"><a href="/#login">log in with Google</a> </button>
    </div>
    <div class="member">
      <p class="food">not a foodiebook member?</p>
    </div>
    <div class="member">
      <p class="here">sign up here.</p>
    </div>
    `;
    return view;
  },
};

export default login;
