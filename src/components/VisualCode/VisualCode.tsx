import { useState } from "react";
import styles from "./VisualCode.module.css";
export function VisualCode() {
  //   return (
  //     <div className="vscode-window">
  //       <div></div>
  //       <div className="title-bar">
  //         <span className="window-buttons">
  //           <span className="btn close"></span>
  //           <span className="btn minimize"></span>
  //           <span className="btn maximize"></span>
  //         </span>
  //         <span className="title">Visual Studio Code - clone</span>
  //       </div>
  //       <div className="main">
  //         <div className="sidebar">
  //           <div className="icon">📁</div>
  //           <div className="icon">🔍</div>
  //           <div className="icon">🐛</div>
  //         </div>
  //         <div className="editor">
  //           <div className="tab-bar">
  //             <span className="tab active">index.html</span>
  //             <span className="tab">style.css</span>
  //           </div>
  //           <pre className="code">
  //             <code>
  //               &lt;!DOCTYPE html&gt; &lt;html lang="pt-br"&gt; &lt;head&gt;
  //               &lt;meta charset="UTF-8"&gt; &lt;title&gt;VS Code
  //               Clone&lt;/title&gt; &lt;/head&gt; &lt;body&gt; &lt;h1&gt;Hello, VS
  //               Code!&lt;/h1&gt; &lt;/body&gt; &lt;/html&gt;
  //             </code>
  //           </pre>
  //         </div>
  //       </div>
  //     </div>
  //   );
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

  const code =
    '!<DOCTYPE html><html lang="pt-br"><head><meta charset="UTF-8"><title>Portfolio Luccasts</title></head><body><h1>Bem vindo</h1></body></html>';
  return (
    <div className={styles.window}>
      <div>
        <header>
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
                  <li className={`${styles.nav_files_select}`}>styles.css</li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
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
                        <div className={styles.ul_projetos_divNames}>Hizus</div>
                      </li>
                      <li>
                        <div className={`${styles.ul_projetos_divNames}`}>
                          AnimeOrange
                        </div>
                      </li>
                      <li>
                        <div className={`${styles.ul_projetos_divNames}`}>
                          Descriptografar
                        </div>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
                <li
                  className={`${styles.list_hover} ${styles.margin_li_names}`}
                >
                  <div className={`${styles.ul_projetos_divNames}`}>
                    Sobre-mim.html
                  </div>
                </li>
                <li
                  className={`${styles.list_hover} ${styles.margin_li_names}`}
                >
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
      <main className={styles.main}>
        <div>{code}</div>
      </main>
    </div>
  );
}
