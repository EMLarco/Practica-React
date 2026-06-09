import styles from "./footer.module.css";

export const Footer = () => {
  const anioActual = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>Departamento de Ciencias de la Computación - {anioActual}</p>
      <p>Programación Integrativa de Componentes Web</p>
    </footer>
  );
};
