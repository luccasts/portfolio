import { useState } from "react";
import styles from "./AsideNav.module.css";
export function AsideNav() {
  const [files, setFiles] = useState(false);
  const [portfolio, setPortfolio] = useState(false);
  const [projetos, setProjetos] = useState(false);
  function openProjetos() {
    handleUseState(projetos, setProjetos);
  }
  function openFiles() {
    handleUseState(files, setFiles);
  }
  function openPortfolio() {
    handleUseState(portfolio, setPortfolio);
  }
  function handleUseState(
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    if (open) {
      return setOpen(false);
    }
    setOpen(true);
  }

  return (
    <aside className={styles.aside}>
      <div className={styles.asideUl_background}>
        <ul>
          <li onClick={() => openFiles()}>📂</li>
          <li>🔎</li>
        </ul>
      </div>
      {files ? (
        <nav className={styles.aside_nav}>
          {/*⮟⮞ */}
          <div
            onClick={() => openPortfolio()}
            className={styles.aside_nav_div_title}
          >
            <span>{portfolio ? "⮟" : "⮞"}</span>
            <h2 className="text_green">Portfolio</h2>
          </div>
          {portfolio ? (
            <ul className={styles.primeiraUl_projetos}>
              <li>
                <div
                  onClick={() => openProjetos()}
                  className={styles.ul_li_div_title_projetos}
                >
                  <div
                    className={`${styles.ul_projetos_divNames} ${styles.title_projetos_flex} ${styles.list_hover} ${styles.margin_li_names}`}
                  >
                    <span>{projetos ? "⮟" : "⮞"}</span>
                    <div>Projetos</div>
                  </div>
                </div>
                {projetos ? (
                  <ul className={styles.segundaUl_dentro_projetos}>
                    <li>
                      <div
                        className={`${styles.ul_projetos_divNames} ${styles.segundaUl_div_li}`}
                      >
                        Hizus
                      </div>
                    </li>
                    <li>
                      <div
                        className={`${styles.ul_projetos_divNames} ${styles.segundaUl_div_li}`}
                      >
                        AnimeOrange
                      </div>
                    </li>
                    <li>
                      <div
                        className={`${styles.ul_projetos_divNames} ${styles.segundaUl_div_li}`}
                      >
                        Descriptografar
                      </div>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </li>
              <li className={`${styles.list_hover} ${styles.margin_li_names}`}>
                <div className={`${styles.ul_projetos_divNames}`}>
                  Sobre-mim.html
                </div>
              </li>
              <li className={`${styles.list_hover} ${styles.margin_li_names}`}>
                <div className={`${styles.ul_projetos_divNames}`}>
                  Contatos.html
                </div>
              </li>
            </ul>
          ) : (
            ""
          )}
        </nav>
      ) : (
        ""
      )}
    </aside>
  );
}
