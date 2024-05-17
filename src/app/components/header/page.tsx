'use client';
import styles from "./page.module.css";

function Header(){
    const cadastrarProduto = () => {
      alert("Cadastrar novo produto");
    };

    return(
      <div className={styles.header}>
        <h1>PRODUTOS NO ESTOQUE</h1>
        <button className={styles.cadastro} onClick={cadastrarProduto}>Cadastrar produto</button>
      </div>
    );
}

export default Header;