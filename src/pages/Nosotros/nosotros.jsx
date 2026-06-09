import { FaCode, FaDatabase, FaGlobe, FaLayerGroup } from "react-icons/fa";
import { MateriaItem } from "../../components";
import styles from "./nosotros.module.css";

const materias = [
  {
    icono: <FaLayerGroup />,
    nombre: "Programación Integrativa de Componentes Web",
    descripcion:
      "Diseño de aplicaciones modernas mediante componentes, rutas, servicios y consumo de APIs.",
  },
  {
    icono: <FaCode />,
    nombre: "Desarrollo de Software",
    descripcion:
      "Aplicación de lógica, estructuras y buenas prácticas para crear soluciones mantenibles.",
  },
  {
    icono: <FaDatabase />,
    nombre: "Bases de Datos",
    descripcion:
      "Gestión, organización y consulta de información para sistemas informáticos.",
  },
  {
    icono: <FaGlobe />,
    nombre: "Aplicaciones Web",
    descripcion:
      "Construcción de interfaces accesibles, adaptables y conectadas con servicios externos.",
  },
];

export const NosotrosPage = () => {
  return (
    <section className={styles.nosotros}>
      <div className={styles.encabezado}>
        <p className={styles.etiqueta}>Sobre la práctica</p>
        <h1>Asignaturas del semestre</h1>
        <p>
          Esta vista reutiliza el componente MateriaItem y representa cada
          asignatura mediante iconos de React Icons.
        </p>
      </div>

      <div className={styles.lista}>
        {materias.map((materia) => (
          <MateriaItem key={materia.nombre} {...materia} />
        ))}
      </div>
    </section>
  );
};
