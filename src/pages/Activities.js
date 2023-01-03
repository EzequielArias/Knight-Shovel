import React, {useRef} from 'react'
import rol from '../data.js'
import skins from '../outfits'
import '../styles/Activities.css'
import { BsArrowLeftShort , BsArrowRightShort } from 'react-icons/bs'
let skin = skins()
let arr = rol()


const Activities = () => {

  const scrollRef = useRef(null)
  const scrollRef2 = useRef(null)

  const scroll2 = (valor) => {
    const { current } = scrollRef2 

  if(valor === 'left'){
    current.scrollLeft -= 300
  }else{
    current.scrollLeft += 300
  }
}

  const scroll = (valor) => {
      const { current } = scrollRef 

    if(valor === 'left'){
      current.scrollLeft -= 50
    }else{
      current.scrollLeft += 50
    }
  }
/**/ 
       
  return (
    <div className='container-activities'>
      <h3>Las actividades de Shovel</h3>
      <h3>Knights</h3>

      <span>Misiones todas las semanas</span>
      <p>Compite por el primer puesto</p>
       
       <p>En shovel knights tenemos un sistema de premiacion
        para los 3 primeros en la tabla de XP aportada.
        Ademas de eso, activamos nuevas misiones TODAS las semanas
        , para mantener la cosa bien activa
       </p>
      <div className='activities-container'>
       <div className='skin_img' ref={scrollRef2}>
          {skin.map((el,i) => {
            return (
              <img 
              src={el} 
              alt='skins-image' 
              key={i}
              />
            )
          })}
       </div>
       <div className='arrows'>
          <BsArrowLeftShort  className="gallery__arrow-icon" onClick={() => scroll2('left')}/>
          <BsArrowRightShort  className="gallery__arrow-icon" onClick={() => scroll2('right')}/>
        </div>
      </div>

          <span>Partidas personalizadas</span>
          <p>Las posibilidades son infinitas</p>

          <p>
          Diviértete en partidas personalizadas 
          creadas por nuestro game master, SK_EvansNecro,
           en las cuales además de ganar XP adicional y reforzar tus lazos con el resto de miembros puedes sacar
            algún premio más si estamos llevando a cabo un evento especial para 
          los miembros de Shovel Knights.
          </p>
       <div className='activities-container'>
        <div className='activities-container_images' ref={scrollRef}>
            {arr.map((el,index) => {
              return (
                <img src={el} alt='' key={index}/>
              )
            })}
        </div>
        <div className='arrows'>
          <BsArrowLeftShort  className="gallery__arrow-icon"  onClick={() => scroll('left')}/>
          <BsArrowRightShort  className="gallery__arrow-icon" onClick={() => scroll('right')}/>
        </div>
       </div>

    </div>
  )
}

export default Activities