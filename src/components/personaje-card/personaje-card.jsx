import PropTypes from "prop-types";
import styles from "./personaje-card.module.css";

export const PersonajeCard = ({ imagen, nombre, especie }) => {
  return (
    <article className={styles.personajeCard}>
      <img className={styles.imagen} src={imagen} alt={`Imagen de ${nombre}`} />
      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p>{especie}</p>
      </div>
    </article>
  );
};

PersonajeCard.propTypes = {
  imagen: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  especie: PropTypes.string.isRequired,
};
