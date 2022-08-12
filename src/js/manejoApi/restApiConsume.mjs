"use strict";
//@ts-check


import { URL_OBJ } from './urls.mjs'
import { DOM_ELEMENTS } from '../DomElements/getDomElements.mjs'


const elementos = []



export const getAllCharacters = async () => {
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
          origin: el.origin.name,
          location: el.location.name,
          episode: el.episode.length,
          created: el.created
        }
      }
    )

    mapeoResults.map(el => {
      //*pendiente de agregar las clases que tengo en el html estático a estos elementos
      let divContainerCharacter = document.createElement('div');
      divContainerCharacter.classList.add('container-character');


      let pOrigin = document.createElement('p');
      pOrigin.id = el.origin;
      let episode = document.createElement('p');
      episode.id = el.episode;
      let pLocation = document.createElement('p');
      pLocation.id = el.location;
      let pCreated = document.createElement('p');
      pCreated.id = el.created;



      let h3Character = document.createElement('h3')
      let genderCharacter = document.createElement('p')
      let imgCharacter = document.createElement('img')
      imgCharacter.setAttribute('id', el.name)

      h3Character.innerText = `${el.name}`
      genderCharacter.innerHTML = el.gender;
      imgCharacter.src = el.image

      divContainerCharacter.append(h3Character, genderCharacter, imgCharacter)

      sectionCharacter.append(divContainerCharacter)
    })


    const characters = document.querySelectorAll('.container-character')
    characters.forEach(el => {
      el.addEventListener('click', (event) => {
        event.preventDefault()
        const element = {

          name: el.querySelector('h3').innerText,
          gender: el.querySelector('p').innerText,
         /* created: el.querySelector('p:nth-child(3)').id,
          origin: el.querySelector('p:nth-child(4)').id,
          location: el.querySelector('p:nth-child(5)').id,
          episode: el.querySelector('p:nth-child(6)').id,*/
          image: el.querySelector('img').src
        }
        elementos.push(element)
        console.log(element);
        console.log(elementos);
        return element;
      })
    }
    )
    //!kjfnjafohaouñfhnwoñufhnoñsianvoasnvños
    console.log(characters);

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

/*function filtrarCharacter(id) {
  const { sectionCharacter } = DOM_ELEMENTS;
  const character = sectionCharacter.querySelector(`#${id}`);
  character.classList.toggle('hidden');
}
*/


//!ejecución de las funciones a nivel del objeto window




function filtrar(valueInput) {

}

