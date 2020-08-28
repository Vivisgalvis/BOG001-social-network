// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();

import router from './router.js';

window.addEventListener('hashchange', () => {
    router(window.location.hash);
});

window.addEventListener('load', router);