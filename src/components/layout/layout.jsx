import PropTypes from "prop-types";
import { Footer } from "../footer";
import { Header } from "../header";
import styles from "./layout.module.css";

export const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
