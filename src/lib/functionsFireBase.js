//import { editar } from "../views/timeLine.js"
import { manejadorEvento } from '../views/timeLine.js'

/*Ingresar a la aplicacion*/

function logueo (email,password){
  firebase.auth().signInWithEmailAndPassword(email,password).then((result) =>{
    window.location.hash = "#welcome";  
  })
  .catch( function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
   
    });
}



/*Crear usuario y quedar logueado*/
function registrar(email ,password){

    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=> {
    firebase.auth().signInWithEmailAndPassword(email,password).then((result2)=> {
    window.location.hash = "#welcome";
   }) 
 })
 .catch( function(error) {
 var errorCode = error.code;
 var errorMessage = error.message;
 });
}



/*loguear e ingresar con google*/
function signUpGoo() {

  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
      window.location.hash = "#welcome";
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    })};

    /*------- Leer datos -----*/

  export default(data,crearPost) => {
    const dataPost = crearPost.querySelector("#data");

  db.collection("posts").onSnapshot((querySnapshot) => {
    dataPost.innerHTML = "";

    querySnapshot.forEach((doc) => {
     
      const post = document.createElement("div")
        post.className = 'container-post'

        post.innerHTML = `
        <div class="containerTimeline card">
          <div class="card-post">
            <p>${doc.data().first}</P>
            <button class="btns btn-editar" data-id='${doc.id}'  data-post='${doc.data().first}'> <i class="fas fa-edit"></i></button>
            <button class="btns btn-eliminar" data-id='${doc.id}' > <i class="fas fa-trash-alt"></i></button>
            <button class="btns btn-adjuntar" > <i class="fas fa-paperclip"></i></button>
            <button class="btns btn-like"> <i class="fas fa-heart"></i></button>
            </div>
        </div>
       `
      /*-------EVENTO ELIMINAR POST--------*/ 

       const btnEliminar = post.querySelector(".btn-eliminar") ;
       
       btnEliminar.addEventListener('click', (e) => {
        e.preventDefault();
        let id = doc.id
        eliminar(id);
      
    })
      
    /*-------EVENTO EDITAR POST--------*/ 

    const btnEditar = post.querySelector(".btn-editar") ;
    
     btnEditar.addEventListener('click', (e) => {
     e.preventDefault();
     let idEditar = doc.id;
     let postEditar = doc.data().first
     editar(idEditar,postEditar);
  
 })

    dataPost.appendChild(post)

    });
    /*-------ELIMINAR POSTS --------*/ 

 function eliminar(id){

  const btnEliminarPost = dataPost.querySelector(".btn-Eliminar");
  

  db.collection("posts").doc(id).delete().then(function() {
      console.log("Document successfully deleted!");
      
  }).catch(function(error) {
      console.error("Error removing document: ", error);
  });
}

});

  return dataPost;
} 

/*-------Agregar Post--------*/ 

   var db = firebase.firestore();

   // Agregar Post
  function crear(form){
   
    const posts = document.querySelector("#posts").value;
     
      db.collection("posts").add({
        first: posts
        //last: "Lovelace",
    })
    .then(function(docRef) {
        //console.log("Document written with ID: ", docRef.id);
        const posts = document.querySelector("#posts").value = "";
        
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
};

/*-------EDITAR POSTS --------*/

function editar(id,posts){

  document.querySelector("#posts").value = posts;
  let boton = document.getElementById("btn-publicar");
  boton.style.display='none'
  const btnActualizar = document.getElementById("btn-actualizar")
  btnActualizar.style.display='block'
  btnActualizar.addEventListener('click' , manejadorEdicion )

 function manejadorEdicion (){
    
      var dataRef = db.collection("posts").doc(id);
      const posts = document.querySelector("#posts").value;

      return dataRef.update({
          first: posts 
      })
      .then(function() {
          console.log("Document successfully updated!");
          boton.style.display='block'
          btnActualizar.style.display='none'
          document.querySelector("#posts").value = "";
      })
      .catch(function(error) {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
      });
  }
}

export {signUpGoo, registrar, logueo, crear};