import { Link, useLocation } from "react-router";
import styles from "./NavBar.module.css";
export function NavBar() {
  const name = useLocation();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.nav_names}>
          <div>♦ </div>
          <div>Luccasts Code</div>
        </div>
        <div>
          <div className={styles.nav_files}>
            <ul>
              <li
                className={`${styles.nav_files_select} ${
                  name.pathname === "/" ? styles.page_active : ""
                } `}
              >
                <Link to={"/"}>sobre.html</Link>
              </li>
              <li
                className={`${styles.nav_files_select} ${
                  name.pathname === "/projetos" ? styles.page_active : ""
                } `}
              >
                <Link to={"/projetos"}> projetos.html </Link>
              </li>
              <li
                className={`${styles.nav_files_select} ${
                  name.pathname === "/contatos" ? styles.page_active : ""
                }`}
              >
                <Link to={"/contatos"}> contatos.html </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
