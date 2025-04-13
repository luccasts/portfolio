import styles from "./NavBar.module.css";
export function NavBar() {
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
                className={`${styles.nav_files_select} ${styles.page_active}`}
              >
                sobre-mim.html
              </li>
              <li className={`${styles.nav_files_select}`}>projetos.html</li>
              <li className={`${styles.nav_files_select}`}>contatos.html</li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
