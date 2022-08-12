"use strict";

//@ts-check

export const $ = id => document.querySelector(id)

export const DOM_ELEMENTS = {
  //*secciones principales
  sectionCharacter: $('.container-character'),
  mainSection: $('.mainSection'),
  //* contendor del inicio de sesion con google
  signInGoogle: $('.signup_signin'),

  //* propiedades que me trae el objeto user de la auth con google
  displayNameGoogle: $('.displayNameGoogle'),
  imgGoogle: $('.img_google'),


  //*btn de inicio de sesion con google
  btnSignIn: $('#btn-google-signin'),
  btnSignOff: $('#btn-google-signoff'),



  inputSearchCharacter: $('#inputSearchCharacter'),
}

console.log(DOM_ELEMENTS);