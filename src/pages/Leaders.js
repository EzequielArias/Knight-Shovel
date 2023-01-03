import React from 'react'
import '../styles/Leaders.css'
import SK_medialunassincrema from '../assets/Admins/SK_MediaLunaSinCrema.png'
import SK_EvansNecro from '../assets/Admins/SK_EvansNecro.png'
import SK_Poppy from '../assets/Admins/SK_Poppy.png'
import SK_KellerHackjit from '../assets/Admins/SK_KellerHackjit.png'

const Leaders = () => {
  return (
    <div className='container-leaders'>
        <section>
        <h4>SK_MedialunasSinCrema</h4>
        <span>Lider de Shovel Knights.
          es el encargado de solucionar todas las dudas, del farmeo excesivo de oro.
          <br/> 
          En serio, tiene un problema.
        </span>
        <img src={SK_medialunassincrema} alt=''/>
        </section>
      
        <section>
        <h4>SK_Poppy</h4>
          <span>La matriarca del clan y pareja de MediaLuna. Actualmente
            su cargo en Shovel Knights es el de "Premiadora", es quien se encarga de farmear
            las rosas para entregar en los premios al finalizar las misiones semanales
          </span>
          <img src={SK_Poppy} alt=''/>
        </section>

        <section>
        <h4>SK_KellerHackjit</h4>
          <span>El verdugo.<br/>
          Actualmente, retirado de su cargo de lider, se encarga de mantener actualizado el
          registro de actividad del clan, y de cortar cabezas cada semana antes de iniciar una nueva mision.
          <br/>
          Sigue levantando la pala el viejo
          </span>
          <img src={SK_KellerHackjit} alt=''/>
        </section>

        <section >
        <h4>SK_EvansNecro</h4>
          <span> Nuestro Game Master.
            La santa pala le encomendo la tarea de desbloquear todos los roles para crear mejores partidas
            personalizadas para entretener al clan y poder generar eventos de la comunidad
          </span>
          <img src={SK_EvansNecro} alt=''/>
        </section>
    </div>
  )
}

export default Leaders