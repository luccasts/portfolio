import styles from "./Main.module.css";
//receber code pelo parâmetro
export function Main() {
  const code =
    '!<DOCTYPE html><html lang="pt-br"><head><meta charset="UTF-8"><title>Portfolio Luccasts</title></head><body><h1>Bem vindo</h1></body></html>';
  return (
    <main className={styles.main}>
      <div>{code}</div>
    </main>
  );
}
