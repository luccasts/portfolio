import styles from "./Main.module.css";
//receber code pelo parâmetro
export function Main({ children }: any) {
  return <main className={styles.main}>{children}</main>;
}
