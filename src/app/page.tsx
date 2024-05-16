import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (

    <main className={styles.main}>
      <div className={styles.header}>
        <h1>Produtos no estoque</h1>
      </div>
      <div className={styles.dados}>
        <div className={styles.produto}>
          <h3>Nome do produto</h3>
          <p>Descrição do produto</p>
          <span>Valor do produto</span>
          <Image src="/camiseta.jpg" alt="Teste" width={300} height={300}></Image>

        </div>
      </div>

      

    </main>
  );
}
