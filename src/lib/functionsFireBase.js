
/*Crear usuario y quedar logueado*/
function registrar(name, lastName , email ,password){

    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=> {
   //console.log(result)
   //console.log(email, pass)
   firebase.auth().signInWithEmailAndPassword(email,password).then((result2)=> {
    window.location.hash = "#welcome";
   }) 
 })
 .catch( function(error) {
 var errorCode = error.code;
 var errorMessage = error.message;
 });
}

export { registrar};
