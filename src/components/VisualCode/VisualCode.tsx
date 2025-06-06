import styles from "./VisualCode.module.css";
import { AsideNav } from "../AsideNav/AsideNav";
import { NavBar } from "../NavBar/NavBar";
import { Main } from "../Main/Main";
import { HackerParticles } from "../HackerParticles/HackerParticles";
export function VisualCode({ children }: any) {
  return <div className={styles.window}>{children}</div>;
}
