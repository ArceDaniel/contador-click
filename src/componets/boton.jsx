import React from "react";
import '../styles/boton.css'

export function Boton({texto, buttonState, buttonController}){
  return(
    <button
    className={buttonState ? 'boton-clic' : 'boton-reiniciar'}
    onClick = {buttonController}
    >{texto}</button>
  )
}