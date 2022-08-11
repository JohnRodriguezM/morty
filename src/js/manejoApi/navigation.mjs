


import { DOM_ELEMENTS } from '../DomElements/getDomElements.mjs'


import { getAllCharacters } from '../manejoApi/restApiConsume.mjs'

const { signInGoogle, mainSection } = DOM_ELEMENTS;

import { authGoogle } from '../auth/auth.mjs';

//* se empieza a manejar navegación pero desde que se está en el home, no cuando se está en la parte de la auth
const navigator = () => {
  switch (location.hash) {
    case '#auth':
      console.log('estamos en la parte de autenticación');
      break;
    case '#home':
      console.log('estamos en el home');
      break;
    default:
      console.log('donde estamos :)  ????');
      break;
  }
  location.hash
}
















window.addEventListener('DOMContentLoaded', (event) => {
  navigator()

})

window.addEventListener('hashchange', (event) => {
  location.reload()
  navigator()
})
