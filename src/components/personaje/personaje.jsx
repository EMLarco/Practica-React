import PropTypes from "prop-types";
import styles from "./personaje.module.css";

export const PersonajeCard = ({ nombre, especie, url }) => {
  return (
    <div className={styles["personaje-card"]}>
      <img className={styles["personaje-imagen"]} src={url} alt={`Imagen de ${nombre}`} />
      <div className={styles["personaje-info"]}>
        <h3>{nombre}</h3>
        <p>{especie}</p>
      </div>
    </div>
  );
};

PersonajeCard.propTypes = {
  nombre: PropTypes.string.isRequired,
  especie: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
