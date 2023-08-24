import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
const Navbar: React.FC = () => {
  return (
    <nav className={styles.navcontainer}>
      <Image src="/assets/logo.svg" width={200} height={50} alt="logo" />
      <ul className={styles.navul}>
        <Link href="">HOME</Link>
        <Link href="">NOSOTROS</Link>
        <Link href="">SERVICIOS</Link>
        <Link href="">ENLACES</Link>
        <Link href="">CONTACTO</Link>
      </ul>
      <Image src="/assets/logo.svg" width={200} height={50} alt="logo" />
    </nav>
  );
};

export default Navbar;
