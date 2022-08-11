"use strict";

//@ts-check

export const $ = id => document.querySelector(id)

export const DOM_ELEMENTS = {
  sectionCharacter: $('.container-character'),
  mainSection: $('.mainSection'),
  signInGoogle: $('.signup_signin'),
  displayNameGoogle: $('.displayNameGoogle'),
  imgGoogle: $('.img_google'),
}

console.log(DOM_ELEMENTS);