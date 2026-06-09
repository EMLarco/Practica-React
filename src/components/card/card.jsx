import './card.css'
import PropTypes from 'prop-types'

export const Card = (props) => {
  return <h1>Mi nombre es {props.nombre} y tengo {props.edad}
  </h1>
    /*return (
    <>
      <h1>Soy el componente WEB</h1>
    </>
  )*/
}


Card.PropTypes = {
    nombre: PropTypes.string.isRequired,
    edad: PropTypes.number.isRequired
}

//export default Card;
