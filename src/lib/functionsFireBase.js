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
      console.log(doc);

        dataPost.innerHTML += `
        <!--<tr>
        <th scope="row"></th>-->
        <div class="container-post">
        <p>${doc.data().first}</p>
        <button class="btn-eliminar" >Eliminar</button>
        <!--<button clas="btn-editar" click="editar('${doc.id}','${doc.data().first}')">Editar</button>-->
        </div>
        <!--</tr>-->
       `

       const btnsEliminar = dataPost.querySelectorAll(".btn-eliminar") ;
    console.log(btnsEliminar)

    btnsEliminar.forEach((btnEliminar) => {
      btnEliminar.addEventListener('click', (e) => {
        e.preventDefault();
        console.log("Eliminado")
        eliminar(('${doc.id}'));
      })
    })
    });

    /*const btnsEliminar = dataPost.querySelectorAll(".btn-eliminar") ;
    console.log(btnsEliminar)

    btnsEliminar.forEach((btnEliminar) => {
      btnEliminar.addEventListener('click', (e) => {
        e.preventDefault();
        console.log("Eliminado")
        eliminar(doc.dataset.id);
      })
    })*/

});
function eliminar(id){

  const btnEliminarPost = dataPost.querySelector(".btn-Eliminar");
  //btnEliminarPost.dataset.id

  db.collection("posts").doc(id).delete().then(function() {
      console.log("Document successfully deleted!");
      //const btnEliminar = dataPost.querySelector("#btnEliminar");
  }).catch(function(error) {
      console.error("Error removing document: ", error);
  });
}
 return dataPost;
} 

/*-------Agregar Post--------*/ 

   var db = firebase.firestore();

   // Agregar Post
  function crear(form){
    //const form = crearPost.querySelector("#formTimeLine");
      const posts = form.querySelector("#posts").value;

    db.collection("posts").add({
        first: posts
        //last: "Lovelace",
    })
    .then(function(docRef) {
        //console.log("Document written with ID: ", docRef.id);
        const posts = form.querySelector("#posts").value = "";
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
};

/*---- ELIMINAR POSTS ---- */

/*function eliminar(id){

  //const btnEliminarPost = dataPost.querySelector(".btn-Eliminar");
  //btnEliminarPost.dataset.id

  db.collection("posts").doc(id).delete().then(function() {
      console.log("Document successfully deleted!");
      //const btnEliminar = dataPost.querySelector("#btnEliminar");
  }).catch(function(error) {
      console.error("Error removing document: ", error);
  });
}*/

export {signUpGoo, registrar, logueo, crear};

