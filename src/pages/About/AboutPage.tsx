import { useEffect, useRef } from "react";
import { Main } from "../../components/Main/Main";
import styles from "./About.module.css";
import photo from "../../img/my.png";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";
import MyPhoto from "../../components/MyPhoto/MyPhoto";

gsap.registerPlugin(TextPlugin);
export function AboutPage() {
  const textRef = useRef(null);
  useGSAP(() => {
    gsap.to(textRef.current, {
      duration: 3,
      text: "Olá, eu sou Lucas(Luccasts) ",
      ease: "none",
    });
  });

  return (
    <Main>
      <div className={`${styles.div1} ${styles.myphoto}`}>
        <div className={`${styles.myphoto}`}>
          <div className={`${styles.div_text}`}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <h1 ref={textRef} className="text_green"></h1>
              <span
                style={{ fontSize: 24, zIndex: -1 }}
                className={`${styles.cursor}`}
              >
                |
              </span>
            </div>
            <div className={`${styles.paragraph}`}>
              <p>
                Sou Desenvolvedor Front-End, tenho 21 anos e programo mais de 3
                anos. Sou um aspirante a programador em busca de conhecimento e
                adoro desafios!
              </p>
              <p>
                Atualmente, estou me aventurando pelas áreas de Back-End e Data
                Science.
              </p>
            </div>
          </div>
          <MyPhoto src={photo} alt="minhaFoto" />
          {/* <div>
            <img  width={200} />
          </div> */}
        </div>
      </div>

      <div className={`${styles.div2}`}>
        <div>
          <h2 className="">Tecnologias</h2>
        </div>
        <div className={`${styles.icons}`}>
          <div className={styles.ul_tec}>
            <h3>Linguagem de Programação</h3>
            <ul>
              <li>Javacript</li>
              <li>TypeScript</li>
              <li>Ruby</li>
              <li>SQL</li>
            </ul>
          </div>
          <div className={styles.ul_tec}>
            <h3>FrameWorks</h3>
            <ul>
              <li>NextJS</li>
              <li>AngularJS</li>
            </ul>
          </div>
          <div className={styles.ul_tec}>
            <h3>Biblioteca</h3>
            <ul>
              <li>ReactJS</li>
            </ul>
          </div>
          <div>
            <h3>Banco de Dados</h3>
            <ul>
              <li>MySQL</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.quadradoGithub}>
        <a href="https://github.com/Luccasts">
          <img
            loading="lazy"
            alt="github tabela de tecnologias"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Luccasts&layout=compact&langs_count=7&theme=dracula"
          />
        </a>
      </div>
      <p id="Github-p">
        Quadro de Tecnologias utilizadas nos projetos do GitHub
      </p>
    </Main>
  );
}
