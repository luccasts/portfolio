import { useEffect, useRef, useState } from "react";
import styles from "./AsideNav.module.css";
import gsap from "gsap";
export function AsideNav() {
  const navRef = useRef<HTMLHeadElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);
  const twoUlRef = useRef<HTMLUListElement>(null);
  const [files, setFiles] = useState(false);
  const [portfolio, setPortfolio] = useState(false);
  const [projetos, setProjetos] = useState(false);
  const tl = gsap.timeline();

  useEffect(() => {
    if (!files || !navRef.current) return;
    tl.fromTo(
      navRef.current,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: "power3.out",
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files]);
  useEffect(() => {
    if (!portfolio || !ulRef.current) return;
    tl.fromTo(
      ulRef.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [portfolio]);
  useEffect(() => {
    if (!projetos || !twoUlRef.current) return;
    tl.fromTo(
      twoUlRef.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projetos]);
  function openProjetos() {
    setProjetos(!projetos);
  }
  function openFiles() {
    setFiles(!files);
  }
  function openPortfolio() {
    setPortfolio(!portfolio);
  }

  return (
    <aside className={styles.aside}>
      <div className={styles.fake_aside_background}>
        <div className={styles.asideUl_background}>
          <ul className={styles.asideUl_icons}>
            <li style={{ display: "none" }}>📂</li>
          </ul>
        </div>
      </div>
      <div className={styles.asideUl_background}>
        <div className={styles.both_aside}>
          <ul className={styles.asideUl_icons}>
            <li onClick={() => openFiles()}>📂</li>
            <li>🔎</li>
          </ul>
          {files ? (
            <nav ref={navRef} id="animationFolder" className={styles.aside_nav}>
              <div
                onClick={() => openPortfolio()}
                className={styles.aside_nav_div_title}
              >
                <span>{portfolio ? "⮟" : "⮞"}</span>
                <h2 className="text_green">Portfolio</h2>
              </div>
              {portfolio ? (
                <ul ref={ulRef} className={styles.primeiraUl_projetos}>
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
                      <ul
                        ref={twoUlRef}
                        className={styles.segundaUl_dentro_projetos}
                      >
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
                  <li
                    className={`${styles.list_hover} ${styles.margin_li_names}`}
                  >
                    <div className={`${styles.ul_projetos_divNames}`}>
                      Sobre.html
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
        </div>
      </div>
    </aside>
  );
}
