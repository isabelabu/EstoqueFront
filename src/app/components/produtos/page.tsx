'use client';
import styles from "./page.module.css";
import Image from "next/image";

function CardProduto(){
    const excluirProduto = () => {
        alert("Produto excluído");
    };
    const editarProduto = () => {
        alert("Produto editado");
    };

    return(
        <div className={styles.main}>
            <div className={styles.info}>
                <h3>Nome do produto</h3>
                <p>Descrição do produto</p>
                <p>Valor do produto</p>
                <Image src="/camiseta.jpg" alt="Teste" width={200} height={200}></Image>
            </div>
          <div className={styles.acoes}>
            <button className={styles.excluir} onClick={excluirProduto}>Excluir</button>
            <button className={styles.editar} onClick={editarProduto}>Editar</button>
          </div>
        </div>
    );
}

export default CardProduto;