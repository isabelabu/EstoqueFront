import styles from "./page.module.css";
import Header from "./components/header/page";
import CardProduto from "./components/produtos/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header></Header>
      <CardProduto ></CardProduto>
    </main>
  );
}
