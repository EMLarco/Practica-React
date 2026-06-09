import { useEffect, useState } from "react";
import { PersonajeCard } from "../../components";
import { obtenerPersonajes } from "../../services/rick-and-morty-service";
import styles from "./personajes.module.css";

export const PersonajesPage = () => {
  const [personajes, setPersonajes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const cargarPersonajes = async () => {
      try {
        const personajesObtenidos = await obtenerPersonajes();
        setPersonajes(personajesObtenidos);
      } catch {
        setError("No se pudieron cargar los personajes. Intenta nuevamente.");
      } finally {
        setCargando(false);
      }
    };

    cargarPersonajes();
  }, []);

  return (
    <section className={styles.personajes}>
      <div className={styles.encabezado}>
        <p className={styles.etiqueta}>API REST</p>
        <h1>Personajes de Rick and Morty</h1>
        <p>
          Información obtenida dinámicamente desde la API pública de Rick and
          Morty mediante Fetch API.
        </p>
      </div>

      {cargando && <p className={styles.estado}>Cargando personajes...</p>}
      {error && <p className={styles.error}>{error}</p>}

      <div className={styles.grid}>
        {personajes.map((personaje) => (
          <PersonajeCard
            key={personaje.id}
            imagen={personaje.image}
            nombre={personaje.name}
            especie={personaje.species}
          />
        ))}
      </div>
    </section>
  );
};
