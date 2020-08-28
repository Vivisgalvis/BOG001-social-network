import home from './views/home.js';

const router = async (route) => {
    const container = document.querySelector("#root");
    
    switch (route) {
        case "#home":
          let page = home;
            container.innerHTML = await page.render();
        break;
        
        default:
            console.log("error");
        break;
        }
        
    
    
    
};

export default router ;

