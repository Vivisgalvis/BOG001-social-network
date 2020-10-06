// import { manejadorEvento } from '../views/timeLine.js'

/*------- INGRESAR A LA APLCACION -----*/

function logueo (email,password){
  firebase.auth().signInWithEmailAndPassword(email,password).then((result) =>{
    window.location.hash = "#welcome";  
  })
  .catch( function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
});
}

/*------- CREAR USUARIO Y QUEDAR LOGUEADO -----*/

function registrar(email ,password){

    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=> {
    firebase.auth().signInWithEmailAndPassword(email,password).then((result2)=> {
    window.location.hash = "#welcome";
}) 
})
.catch( function(error) {
const errorCode = error.code;
const errorMessage = error.message;
});
}

/*------- LOGUEAR E INGRESAR CON GOOGLE -----*/

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

    /*------- LEER DATOS -----*/
    
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
            <p>${doc.data().comentario}</P>
            <button class="btnes btn-editar" data-id='${doc.id}'  data-post='${doc.data().comentario}'> <i class="fas fa-edit"></i></button>
            <button class="btnes btn-eliminar" data-id='${doc.id}' > <i class="fas fa-trash-alt"></i></button>
            <label class="btnes btn-adjuntar">
            <input id="btnAdjuntar" type="file" value="uploadFile" class="btnes btn-adjuntar" hidden><i class="fas fa-paperclip"></i> 
            </label>
            <button class="btnes btn-like"> <i class="fas fa-heart"></i></button>
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
    let postEditar = doc.data().comentario
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

  /* ------ SUBIR IMAGEN A LA COLECCION -------*/

//   const btnUpload = document.getElementById("btnAdjuntar").value;
//   console.log(btnUpload)
//   btnUpload.addEventListener("change", (e) => {
//     console.log(btnUpload)
//     const file = e.target.files[0];
//     const user = firebase.auth().currentUser;
//     uploadImg(file, user.uid);
// });
});

  return dataPost;
}

/*------- AGREGAR POST -----*/

const db = firebase.firestore();

   // Agregar Post
  function crear(form){

  const post = document.querySelector("#posts").value;
    db.collection("posts").add({
      comentario: post
      //last: "Lovelace",
    })
    .then(function(docRef) {
        //console.log("Document written with ID: ", docRef.id);
        const post = document.querySelector("#posts").value = "";
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
    
      const dataRef = db.collection("posts").doc(id);
      const post = document.querySelector("#posts").value;

      return dataRef.update({
          comentario: post 
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

  /*------- LOG OUT --------*/

  export const exit = () => {
      firebase.auth().signOut()
        .then(() => {
          localStorage.clear();
        })
        .catch((error) => {
          alert(error); //An error happened.
        });
    };

    /*------- SUBIR IMG AL POST --------*/

    // function uploadImg (file, uid) {
    //   console.log(uploadImg)
    //   const refStorage = firebase.storage().ref(`imgPost/${uid}/${file.name}`);
    //   const task = refStorage.put(file);
    
    //   task.on(
    //     'state_changed',
    //     (snapshot) => {
    //       const porcentaje = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
    //       localStorage.setItem('uploadImg', porcentaje);
    //     },
    //     (error) => {
    //       alert(error);
    //     },
    //     () => {
    //       task.snapshot.ref
    //         .getDownloadURL()
    //         .then((url) => {
    //           localStorage.setItem('imgNewPost', url);
    //         })
    //         .catch((error) => {
    //           alert(error);
    //         });
    //     },
    //   );
    // };

export {signUpGoo, registrar, logueo, crear };




