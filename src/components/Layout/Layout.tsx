import { useEffect, useRef } from "react";
import { AsideNav } from "../AsideNav/AsideNav";
import { HackerParticles } from "../HackerParticles/HackerParticles";
import { Main } from "../Main/Main";
import { NavBar } from "../NavBar/NavBar";
import { VisualCode } from "../VisualCode/VisualCode";
import styles from "./Layout.module.css";
import gsap from "gsap";
import { Outlet } from "react-router";
import { useGSAP } from "@gsap/react";
export function Layout() {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.fromTo(
      containerRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "sine" }
    );
  });
  return (
    <div>
      <HackerParticles />
      <div ref={containerRef} className={styles.container}>
        <VisualCode>
          <NavBar />
          <AsideNav />
          <Outlet />
        </VisualCode>
      </div>
    </div>
  );
}
