import { ConceptoCard } from "../../components";
import styles from "./inicio.module.css";

const conceptos = [
  {
    imagen:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=900&q=80",
    titulo: "React",
    descripcion:
      "Biblioteca de JavaScript orientada a construir interfaces dinámicas mediante componentes reutilizables.",
  },
  {
    imagen:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
    titulo: "Componentes",
    descripcion:
      "Bloques independientes que reciben datos por props y permiten organizar mejor la interfaz.",
  },
  {
    imagen:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80",
    titulo: "Hooks",
    descripcion:
      "Funciones como useState y useEffect que gestionan estado, efectos y datos dinámicos.",
  },
];

export const InicioPage = () => {
  return (
    <section className={styles.inicio}>
      <div className={styles.hero}>
        <p className={styles.etiqueta}>Práctica de laboratorio</p>
        <h1>Desarrollo de componentes reutilizables con React</h1>
        <p>
          Aplicación creada con Vite, React Router, PropTypes, CSS Modules y
          consumo de una API REST.
        </p>
      </div>

      <div className={styles.grid}>
        {conceptos.map((concepto) => (
          <ConceptoCard key={concepto.titulo} {...concepto} />
        ))}
      </div>
    </section>
  );
};
