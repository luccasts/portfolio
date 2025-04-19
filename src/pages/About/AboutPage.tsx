import { useRef } from "react";
import { Main } from "../../components/Main/Main";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MyPhoto from "../../components/MyPhoto/MyPhoto";
import styles from "./About.module.css";
import photo from "../../img/my.png";
import gsap from "gsap";

gsap.registerPlugin(TextPlugin, useGSAP, ScrollTrigger);

export function AboutPage() {
  const textRef = useRef(null);
  const divPRef = useRef<HTMLDivElement>(null);
  const divTecRef = useRef<HTMLDivElement>(null);
  const tl = gsap.timeline();
  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(".tec");
      boxes.forEach((box: any) => {
        gsap.fromTo(
          box,
          {
            opacity: 0.5,
            x: -90,
            scrollTrigger: {
              trigger: box,
              start: "bottom bottom",
              end: "top 20%",
              scrub: true,

              // markers: true,
            },
          },
          {
            opacity: 2,
            x: 0,
            scrollTrigger: {
              trigger: box,
              start: "bottom bottom",
              end: "top 60%",
              scrub: true,
              // markers: true,
            },
          }
        );
      });
    },
    { scope: divTecRef }
  );

  useGSAP(() => {
    gsap.to(textRef.current, {
      duration: 3,
      text: "Olá, eu sou Lucas(Luccasts) ",
      ease: "none",
    });
  });
  useGSAP(() => {
    tl.fromTo(
      divPRef.current,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 5,
        ease: "power3.out",
      }
    );
  }, {});

  return (
    <Main>
      <div>
        <div className={`${styles.div1} ${styles.myphoto}`}>
          <div className={`${styles.myphoto}`}>
            <div className={`${styles.div_text}`}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <h1 ref={textRef} className="title_green"></h1>
                <span
                  style={{ fontSize: 24, zIndex: -1 }}
                  className={`${styles.cursor}`}
                >
                  |
                </span>
              </div>
              <div className={`${styles.paragraph}`} ref={divPRef}>
                <p>
                  Sou Desenvolvedor Front-End, tenho 21 anos e programo mais de
                  3 anos. Sou um aspirante a programador em busca de
                  conhecimento e adoro desafios!
                </p>
                <p>
                  Atualmente, estou me aventurando pelas áreas de Back-End e
                  Data Science.
                </p>
              </div>
            </div>
            <MyPhoto src={photo} alt="minhaFoto" />
          </div>
        </div>

        <div ref={divTecRef} className={`${styles.div2}`}>
          <div className={`tec`}>
            <h2 className="title_green">Tecnologias</h2>
          </div>
          <div className={`${styles.icons}`}>
            <div className={`${styles.ul_tec} tec`}>
              <h3>Linguagem de Programação</h3>
              <ul>
                <li>Javacript</li>
                <li>TypeScript</li>
                <li>Ruby</li>
                <li>SQL</li>
              </ul>
            </div>
            <div className={`${styles.ul_tec} tec`}>
              <h3>FrameWorks</h3>
              <ul>
                <li>NextJS</li>
                <li>AngularJS</li>
              </ul>
            </div>
            <div className={`${styles.ul_tec} tec`}>
              <h3>Biblioteca</h3>
              <ul>
                <li>ReactJS</li>
              </ul>
            </div>
            <div className={`${styles.ul_tec} tec`}>
              <h3>Banco de Dados</h3>
              <ul>
                <li>MySQL</li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className={styles.quadradoGithub}>
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
        </p> */}
      </div>
    </Main>
  );
}
