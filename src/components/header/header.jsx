import { NavLink } from "react-router-dom";
import styles from "./header.module.css";

export const Header = () => {
    return (
        <header className={styles.header}>
            <h2>Laboratorio React</h2>
            <nav className={styles.nav}>
                <NavLink className={styles.link} to="/">Inicio</NavLink>
                <NavLink className={styles.link} to="/nosotros">Nosotros</NavLink>
                <NavLink className={styles.link} to="/contactos">Contactos</NavLink>
                <NavLink className={styles.link} to="/personajes">Personajes</NavLink>
            </nav>
        </header>
    )
}
