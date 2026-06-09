import styles from "./contactos.module.css";

export const ContactosPage = () => {
  return (
    <section className={styles.contactos}>
      <div className={styles.hero}>
        <h1>Contactos</h1>
        <p>
          Página creada para comprobar la navegación entre vistas de la
          aplicación SPA.
        </p>
      </div>

      <div className={styles.tarjetas}>
        <article className={styles.tarjeta}>
          <h2>Correo institucional</h2>
          <p>contacto@espe.edu.ec</p>
        </article>
        <article className={styles.tarjeta}>
          <h2>Horario de atención</h2>
          <p>Lunes a viernes, 09:00 a 18:00</p>
        </article>
        <article className={styles.tarjeta}>
          <h2>Ubicación</h2>
          <p>Departamento de Ciencias de la Computación</p>
        </article>
      </div>
    </section>
  );
};
