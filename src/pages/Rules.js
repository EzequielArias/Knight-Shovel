import React from 'react'
import shovelRules from '../assets/Backgrounds/ShovelKnight2.jpg'
import '../styles/Rules.css'

const Rules = () => {
  return (
    <div className='container-rules'>
      <img src={shovelRules} alt=''/>

      <h2>REGLAS</h2>
      <h5>Básico para permanecer en el clan :</h5>
      <p>
        Contamos con un registro de actividad en Excel 
        que nos permite un riguroso control de como van
        las cosas en el clan. Si bien pueden existir excepciones
        dependiendo de la situacion de algunos jugadores que estudian
        o trabajan.Para el resto, las exigencias minimas para permanecer en el clan son las siguientes:
      </p>
      <pre>1. Ante todo, respeto, no solo con los</pre>
      <pre>  lideres,sino con otros miembros también</pre>
      <pre>  esta es una comunidad sana donde los</pre>
      <pre>  problemas se arreglan uno a uno en un</pre>
      <pre>  duelo a muerte de palas</pre>
      <br/>
      <pre>2. Evitar temas politicos, religiosos y/o</pre>
      <pre>  altamente controversiales dentro de los</pre>
      <pre>  chats grupales, ya sea el de Wolvesville</pre>
      <br/>
      <pre>3. Participar un minimo en una mision cada </pre>
      <pre>   semanas.(Esto esta sujeto a cambios</pre>
      <pre>   dependiendo del rango que tengas en </pre>
      <pre>   el clan, aumentando la tolerancia de </pre>
      <pre>   Inactividad).</pre>
      <p id='p-miss'>Si bien suena muy estricto, a la hora de no poder cumplir con alguna de estas reglas por alguna situación externa, pueden comunicarse libremente con alguno de los líderes del clan explicando la situación y buscando una solución. Somos gente muy comprensiva, en serio ;)​</p>
    </div>
  )
}

export default Rules