const home = {
  render: async () => {
    const view = `
    <div class="contain">
      <img class="cont-img" src="./images/foodie1.jpeg" alt="">
    </div>
    <section>
    <div class="contain-logo">
    <a href="/#home"><img class="logo" src="./images/logo.png" alt=""></a>
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
    return view;
  },
};

export default home;
