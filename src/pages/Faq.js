import React from 'react'
import '../styles/Faq.css'

const Faq = () => {
  return (
    <div className='faq-container'>
      <h2>Preguntas frecuentes</h2>
      <span>Las respuestas a tus preguntas</span>
      <p>Hemos recopilado una lista completa de preguntas y respuestas comunes sobre nuestro clan. Navega por la sección, y si no encuentras lo que buscas, ponte en contacto con nosotros y estaremos encantados de ayudarte.</p>

      <h5>Indice:</h5>
      <div className='faq-container_items'>
        <ul>
          <li>1.<a>¿Qué pasa si no cumplo alguna de las reglas?</a></li>
          <li>2.<a>¿Qué clase de registro tienen? </a></li>
          <li>3.<a>¿Qué son los rangos?</a></li>
          <li>4.<a>¿Que rangos hay y como alcanzo cada uno?</a></li>
          <li>5.<a>¿Como me uno al grupo de Whatsapp</a></li>
          <li>6.<a>¿Existe algun incentivo adicional para jugar en el clan?</a></li>
          <li>7.<a>¿Que pasa si no puedo pagar la mision semanal?</a></li>
          <li>8.<a>¿Para que sirve un clan?</a></li>
          <li>9.<a>¿Que es el ranking de clanes?</a></li>
          <li>10.<a>¿Que tengo que hacer para ser colider?</a></li>
        </ul>
      </div>
      <div className='faq-container_answers'>
          
      </div>
    </div>
  )
}

export default Faq