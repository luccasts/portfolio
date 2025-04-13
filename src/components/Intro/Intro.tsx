import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./intro.module.css";

export function Intro() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
    });

    tl.to(
      subtitleRef.current,
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.5"
    );

    tl.to(
      buttonRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.3"
    );
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Olá, eu sou o Lucas</h1>
      <h1 ref={titleRef} className={styles.title}>
        Luccasts
      </h1>
      <p ref={subtitleRef} className={styles.subtitle}>
        Desenvolvedor Front-End
      </p>
      <button ref={buttonRef} className={styles.button}>
        Ver Projetos
      </button>
    </div>
  );
}
