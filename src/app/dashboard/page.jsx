import styles from "./dashboard.module.css";
export default function HomePage() {
  const balance = 500.5;
  return (
    <section className={styles.container}>
      <h1>Bem Vindo!</h1>
      <p>Esse é seu sistema de finanças</p>
      <p>Seu saldo para o mês atual é de ${balance} </p>
      <hr />
      <p>
        E essa é a sua área administrativa, utilize um dos menus ou botões
        abaixo para navegar pelo sistema
      </p>

      <div>
        <button className={`${styles.registerBtn} ${styles.button}`}>
          Cadastrar Usuário
        </button>
        <button className={`${styles.launchBtn} ${styles.button}`}>
          Cadastrar Lançamento
        </button>
      </div>
    </section>
  );
}
