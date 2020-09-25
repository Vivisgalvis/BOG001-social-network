import inicio from "./views/home.js";
import ingreso from "./views/login.js";
import registro from "./views/signup.js";
import posts from "./views/timeLine.js"

const container = document.querySelector("#root");
let background = document.body.style
const router = (route) => {
//container.innerHTML = '';
  // console.log(route);
  switch (route) {
    case '':
      container.innerHTML = '';
      const page = inicio();  
      background.backgroundImage = "url('./images/foodie1.jpeg')";  
      container.appendChild(page);
      break;
    case '#login':
      container.innerHTML = '';
      const page2 = ingreso();
      background.backgroundImage = "url('./images/foodie2.jpeg')";
      container.appendChild(page2);
      break;
    case '#signup':
      container.innerHTML = '';
      const page3 = registro();
      background.backgroundImage = "url('./images/foodie3.jpeg')";
      container.appendChild(page3); 
      break;
    case '#welcome':
        container.innerHTML = "";
        const page4 = posts();
        background.backgroundImage = "url('./images/foodie3.jpeg')";
        container.appendChild(page4);
        console.log("Bienvenido a FoodieFook")
        break;
    
      default:
    // const first = inicio();
    // container.appendChild(first);
      // page = home;
      // container.innerHTML = await page.render();
      break;
  }
};

export default router;

// aplicar para cambiar la img de fondo en cada ruta 
// document.body.style.backgroundImage = "urlimage"