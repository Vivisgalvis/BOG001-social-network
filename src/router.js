import home from "./views/home.js";
import login from "./views/login.js";

const router = async (route) => {
  const container = document.querySelector("#root");
  let page = home;
  switch (route) {
    case "#home":
        // console.log("home");
      
      container.innerHTML = await page.render();
      break;
    // case "/#login":
    //   let log = login;
    //   container.innerHTML = await log.render();
    //   break;
    // case "/#signup":
    //   let sign = signup;
    //   container.innerHTML = await sign.render();
    default:
        page = login;
        container.innerHTML = await page.render();
      break;
  }
};

export default router;
