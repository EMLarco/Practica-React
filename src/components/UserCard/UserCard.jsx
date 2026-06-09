import { useState } from 'react'
import './UserCard.css'
import PropTypes from 'prop-types'


export const UserCard = ({ nombre, url, edad, activo = true }) => {
  const [mostrarEdad, setMostrarEdad] = useState(false)

  return (
    <div className='user-card'>
      <h1>{nombre}</h1>
      <img src={url} alt={`Foto de ${nombre}`} />
      {edad !== undefined && (
        <>
          <h2>{mostrarEdad ? `Edad: ${edad}` : 'Edad oculta'}</h2>
          <button onClick={() => setMostrarEdad(!mostrarEdad)}>
            {mostrarEdad ? 'Ocultar edad' : 'Mostrar edad'}
          </button>
        </>
      )}
      <p>{activo ? 'Usuario activo' : 'Usuario inactivo'}</p>
    </div>
  )
}

UserCard.propTypes = {
  nombre: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  edad: PropTypes.number,
  activo: PropTypes.bool,
}

//Desarrolle un componente en React denominado UserCard que reciba propiedades para mostrar la información 
// de un usuario, incluyendo nombre y url como campos obligatorios , y edad y activo como opcionales 
// (este último con valor por defecto true); el componente debe validar las props, mostrar la edad únicamente si 
// es proporcionada, renderizar dinámicamente el estado del usuario (“Usuario activo” o “Usuario inactivo”) 
// mediante operador ternario.
