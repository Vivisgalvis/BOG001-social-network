const home = {
  render: async () => {
    const view = `
          <section>
          <div class="container-logo">
          <img class="logo" src="/images/logo.png" alt="">
          </div>
      <div class="text-1">
    <p>What are you waiting for...</p>
  </div>
  <div class="text-2">
    <p>Join more foodies like you!</p>
  </div>
          </section>
          <div>
            <button class="sign" type="submit"><a href="/#signup">sign up</a> </button>
            <button class="log" type="submit"><a href="/#login">log in</a> </button>
           </div> 
        `;
    return view;
  },
};

export default home;
