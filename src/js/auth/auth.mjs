//! se pretende realizar autenticación con correo electronico y contraseña - en lo ideal con gmail, para extaer el token del name de google

import { DOM_ELEMENTS } from '../DomElements/getDomElements.mjs'


import { getAllCharacters } from '../manejoApi/restApiConsume.mjs'

const { signInGoogle, mainSection, displayNameGoogle, imgGoogle } = DOM_ELEMENTS;


import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";

const provider = new GoogleAuthProvider();
console.log(provider);

/*provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    Ver y descargar sus contactos
*/

const auth = getAuth();

export function authGoogle() {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      console.log(credential);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);



      //! interaccion que va a ocurrir en el dom

      signInGoogle.classList.add('inactive')
      getAllCharacters()
      mainSection.classList.remove('inactive')
      displayNameGoogle.innerHTML = user.displayName;
      displayNameGoogle.classList.remove('inactive')
      imgGoogle.classList.remove('inactive')
      imgGoogle.src = user.photoURL


      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
    });
}

export function signOutGoogle() {
  signOut(auth)
    .then(() => {
      alert('sesion cerrada')
      mainSection.classList.add('inactive')
      displayNameGoogle.classList.add('inactive')
      imgGoogle.classList.add('inactive')
      signInGoogle.classList.remove('inactive')

    })
    .catch((error) => {
      console.error('no cerrada')
      console.log(error);
    });
}


const btnSignIn = document.getElementById('btn-google-signin')
const btnSignOff = document.getElementById('btn-google-signoff')



btnSignIn.addEventListener('click', authGoogle)

btnSignOff.addEventListener('click', signOutGoogle);




