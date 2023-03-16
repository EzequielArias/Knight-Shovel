import React from 'react';
import '../styles/Home.css';
import portada from '../assets/Backgrounds/Warhammer.jpg';
import shovelKnights from '../assets/Backgrounds/ShovelKnight.jpg'
const text = `A finales de 2018 todo comenzó con un proyecto sin esperanzas por parte de Keller Hackjit, Evans Necro y Neron 
Kaiser, un clan pequeño para jugar entre amigos, llamado Kappaclysm. Por vueltas de la vida Neron, quien era líder,
 perdió el acceso a su cuenta y el clan terminó en la ruina por no poder administrarlo, abriendo paso así a
  SleepWalkers, el proyecto renovado, más activo y más fuerte que nunca, con Keller como líder.

A  finales  de  2019  ya  estaba  en el  top  2  o  3  de  los  mejores  clanes  de  Argentina,  la  cosa  estaba  peleada
 con Team Elite... Desgraciadamente para 2020 los miembros originales fueron decayendo uno a uno y abandonando
  el juego, y a su vez, al clan, así es como Keller cedió el mando a LoboGirl, actual líder de Sleep Walkers.

​

Tiempo después en 2022, cuatro miembros originales se juntan y surge la idea de retomar el juego y el proyecto de
 un clan, estos miembros eran MedialunaSinCrema, Poppy y Keller Hackjit.

Evans se unió a los pocos días cuando la idea ya estaba formada, el clan se llamaría Shovel Knights, como 
referencia al chiste argentino de "Agarrar la pala" y al juego que muchísima gente conoce.

Hoy en día no entramos ni siquiera en el top 10... Pero ya vamos a llegar, esta vez vamos por el 1.`

const Home = () => {
    return (
        <div className='container-home'>  
        <img className='portada' src={portada} alt='portada'></img>
        <h2>Shovel Knights</h2>
        <h3>Te da la bienvenida</h3>
        <p className='subTitle'>Más que un clan, una hermandad<br/>¡Nuestra vida por la pala!</p>
            <div className='history-container'>
            <h2 >La historia de Shovel Knights</h2>
            <pre >
              {text}  
            </pre>
            </div>
        <img className='portada' src={shovelKnights} alt='caballeroPala'/> 
        </div>
    );
}

export default Home;