import styles from "./Navbar.module.css";
import Navitem from "./Navitem";

function Navbar() {
  return (
    <nav className={styles.Navbar}>
      <section className={styles.search}>

      </section>
      <Navitem text="Home" href="/" />
      <Navitem text="About" href="/#about" />
      <Navitem text="Contact" href="/#contact" />
    </nav>
  );
}

export default Navbar;
