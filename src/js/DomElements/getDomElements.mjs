"use strict";

//@ts-check

export const $ = id => document.querySelector(id)

export const DOM_ELEMENTS = {
  sectionCharacter: $('.container-character')
}

console.log(DOM_ELEMENTS);