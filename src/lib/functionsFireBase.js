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
//export {logueo};


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

//export { registrar};

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

    /*Agregar Post*/ 

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
        console.log("Document written with ID: ", docRef.id);
        const posts = form.querySelector("#posts").value = "";
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
};


// Leer datos


function publicar(crearPost,data){

  //const data = crearPost.querySelector("#data");

  db.collection("posts").onSnapshot((querySnapshot) => {
    data.innerHTML = "";
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().first}`);
        data.innerHTML += `
        <div class="container-post">
    <textarea name="" id="texPosts" cols="30" rows="10"></textarea>
    <button id="btn-editar" class="editar">Editar</button>
    </div>
       `
    });
});

}

export {signUpGoo, registrar, logueo, crear ,publicar};

