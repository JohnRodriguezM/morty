//! elementos importados de firebase para el manejo de la autenticación
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";

//*elementos que se recuperan del dom a través de de id o class
import { DOM_ELEMENTS } from '../DomElements/getDomElements.mjs'

//? destructuring de las propiedades que contiene el objeto DOM_ELEMENTS
const { signInGoogle, mainSection, displayNameGoogle, imgGoogle,btnSignIn,btnSignOff } = DOM_ELEMENTS;

//* funcion qu está haciendo la petición get a la api de rick and morty, trayendo lo personajes (all)
import { getAllCharacters } from '../manejoApi/restApiConsume.mjs'


//*funciones que me permite poner elementos es display none or remove display none
import {displayNone, displayVisible} from '../helpers/utilFunctions.mjs'



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


      displayNone(signInGoogle)
      //* se ejecuta la función que hace la petición a la API
      getAllCharacters()
      displayVisible(imgGoogle,mainSection,displayNameGoogle)
      displayNameGoogle.innerHTML = "Bienvenido, " + user.displayName;
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
      displayNone(mainSection,displayNameGoogle,imgGoogle)
      displayVisible(signInGoogle)
    })
    .catch((error) => {
      console.error('no cerrada')
      console.log(error);
    });
}


btnSignIn.addEventListener('click', authGoogle)

btnSignOff.addEventListener('click', signOutGoogle);




