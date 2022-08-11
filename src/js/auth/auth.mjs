//! se pretende realizar autenticación con correo electronico y contraseña - en lo ideal con gmail, para extaer el token del name de google

import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";

const provider = new GoogleAuthProvider();
console.log(provider);

/*provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

  	Ver y descargar sus contactos
*/



const btnSignIn = document.getElementById('btn-google-signin')


const btnSignOff = document.getElementById('btn-google-signoff')

btnSignIn.addEventListener('click', ()=> {

  const auth = getAuth();
  console.log(auth);
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      console.log(credential);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
})
function cerrarSesión(){
  signOut(getAuth())
      .then(()=> {
          alert('sesion cerrada')
      })
      .catch((error)=>{
          console.error(error.message)
      });
}

btnSignOff.addEventListener('click', () => cerrarSesión);


