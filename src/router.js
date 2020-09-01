import home from "./views/home.js";
import login from "./views/login.js";
import signup from "./views/singup.js";

const router = async (route) => {
  const container = document.querySelector("#root");
  let page = home;
  switch (route) {
    case "#home":
      container.innerHTML = await page.render();
      break;
    case "#login":
      let page = login;
      container.innerHTML = await page.render();
      break;
    case "#signup":
      let page = signup;
      container.innerHTML = await page.render();
    default:
      page = home;
      container.innerHTML = await page.render();
      break;
  }
};

export default router;
