import { useEffect, useRef } from "react";
import photo from "../img/my.png";
import "../styles/footer.css";
import "../styles/habilidades.css";
import "../styles/navbar.css";
import "../styles/sobre.css";
import gsap from "gsap";
import styles from "./home.module.css";
import { Intro } from "../components/Intro/Intro";
import { VisualCode } from "../components/VisualCode/VisualCode";
export const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  // return (
  //   <>
  //     <header id="header">
  //       <ul>
  //         <li id="habilidades">Habilidades</li>
  //         <li id="sobre-mim">Sobre mim</li>
  //         <li id="projetos">Projetos</li>
  //         <li id="contatos">Contatos</li>
  //       </ul>
  //     </header>
  //     <main>
  //       <section>
  //         <div id="Home">
  //           <div id="home-col">
  //             <div id="home-div-img">
  //               <img id="home-img" src={photo} alt="foto" />
  //             </div>
  //             <div id="home-div-title">
  //               <div id="home-div-h1">
  //                 <h1 id="home-h1" className="text_green">
  //                   Bem vindo!
  //                 </h1>
  //               </div>
  //               <div id="home-div-p">
  //                 <p id="home-p">
  //                   Meu nome é Lucas, tenho 21 anos e programo mais de 3 anos.
  //                   Sou um aspirante a programador em busca de conhecimento e
  //                   adoro desafios!
  //                 </p>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </section>
  //       <section>
  //         <div id="Habilidades">
  //           <h1 className="text_green"> Habilidades</h1>
  //           <h2 className="text_green">Tecnologias conhecidas</h2>
  //           <div id="icons">
  //             <img
  //               loading="lazy"
  //               alt="icon react"
  //               src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  //               width="40"
  //               height="40"
  //             />
  //             <img
  //               loading="lazy"
  //               alt="icon figma"
  //               src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
  //               width="40"
  //               height="40"
  //             />
  //             <img
  //               loading="lazy"
  //               alt="icon javascript"
  //               src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  //               width="40"
  //               height="40"
  //             />
  //             <img
  //               loading="lazy"
  //               alt="icon typescript"
  //               src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
  //               width="40"
  //               height="40"
  //             />
  //             <img
  //               loading="lazy"
  //               alt="icon angularjs"
  //               src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
  //               width="40"
  //               height="40"
  //             />
  //             <img
  //               loading="lazy"
  //               alt="icon nextjs"
  //               src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
  //               width="40"
  //               height="40"
  //             />
  //             <img
  //               loading="lazy"
  //               alt="icon ruby"
  //               src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg"
  //               width="40"
  //               height="40"
  //             />
  //           </div>
  //           <h2 className="text_green">Projetos</h2>
  //           <div id="projetos"></div>
  //           <div id="Github">
  //             <a href="https://github.com/luccasts">
  //               <img
  //                 loading="lazy"
  //                 alt="github tabela de tecnologias"
  //                 src="https://github-readme-stats.vercel.app/api/top-langs/?username=luccasts&layout=compact&langs_count=7&theme=dracula"
  //               />
  //             </a>
  //           </div>
  //           <p id="Github-p">
  //             Quadro de Tecnologias utilizadas nos projetos do GitHub
  //           </p>
  //         </div>
  //       </section>
  //     </main>
  //     <footer id="Contatos">
  //       <div id="Contatos-h1">
  //         <h1>Contatos</h1>
  //       </div>
  //       <div id="contatos">
  //         <a
  //           href="https://www.linkedin.com/in/lucastsilva-dev/"
  //           target="_blank"
  //           rel="noreferrer"
  //         >
  //           <img
  //             loading="lazy"
  //             alt="Link para o Linkedin"
  //             src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white"
  //           />
  //         </a>
  //         <a
  //           href="https://github.com/luccasts/"
  //           target="_blank"
  //           rel="noreferrer"
  //         >
  //           <img
  //             alt="Link para O Github"
  //             loading="lazy"
  //             src="https://img.shields.io/badge/-Github-%23151515?style=for-the-badge&logo=github&logoColor=white"
  //           />
  //         </a>
  //       </div>
  //     </footer>
  //   </>
  // );
  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      <VisualCode />
      <h1 className={styles.h1}>Olá, eu sou o Lucas</h1>
      <Intro />
    </div>
  );
};
