"use strict";
//@ts-check


import { URL_OBJ } from './urls.mjs'
import { DOM_ELEMENTS } from './DomElements/getDomElements.mjs'


const getAllCharacters = async () => {
  const { GET_ALL_CHARACTERS } = URL_OBJ;
  const { sectionCharacter } = DOM_ELEMENTS;


  try {
    const response = await fetch(GET_ALL_CHARACTERS)
    const { results, info } = await response.json()

    const mapeoResults = results.map(
      el => {
        return {
          name: el.name,
          id: el.id,
          gender: el.gender,
          status: el.status,
          species: el.species,
          image: el.image,

        }
      }
    )

    mapeoResults.map(el => {
      //*pendiente de agregar las clases que tengo en el html estático a estos elementos
      let h3Character = document.createElement('h3')
      let genderCharacter = document.createElement('p')
      let imgCharacter = document.createElement('img')

      h3Character.innerHTML = `${el.name}`
      genderCharacter.innerHTML = el.gender;
      imgCharacter.src = el.image



      sectionCharacter.append(h3Character, genderCharacter, imgCharacter)







    })


  }
  catch (err) {

  }
}

//* funcion generica con la funcionalidad básica
const _ = async () => {
  try {

  }
  catch (err) {

  }
}




//!ejecución de las funciones a nivel del objeto window

window.addEventListener('DOMContentLoaded', () => {
  getAllCharacters()
})