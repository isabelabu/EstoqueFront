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
                <tr>
                    <th>ID</th>
                    <th>Imagem</th>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Valor</th>
                    <th>Quantidade</th>
                </tr>
                <tr>
                    <td>#</td>
                    <td><Image src="/camiseta.jpg" alt="Teste" width={100} height={100}></Image></td>
                    <td>Nome do produto</td>
                    <td>Descrição do produto</td>
                    <td>R$ 0,00</td>
                    <td>1</td>
                </tr>
            </div>
          <div className={styles.acoes}>
            <button className={styles.excluir} onClick={excluirProduto}>Excluir</button>
            <button className={styles.editar} onClick={editarProduto}>Editar</button>
          </div>
        </div>
    );
}

export default CardProduto;