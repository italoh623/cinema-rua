"use client";

import Quote from "../Shared/Quote";
import styles from "./styles.module.css";

export default function SessionDisappearance() {
  return (
    <div className={styles.container} id="disappearance">
      <div className={styles.wrapper}>
        <section className={styles.author}>
          <h1>COMO IMPEDIR O SUMIÇO DESTA FERRAMENTA?</h1>
          <h4>Ingrid Coutinho</h4>
        </section>

        <section className={styles.report}>
          <p>A expansão dos cinemas de rua no estado de Pernambuco marcou o século XX, de forma em que diversas cidades da Região Metropolitana do Recife e das zonas interioranas do estado receberam edifícios que ocuparam salas de cinema durante anos. A história dos edifícios que ocuparam monumentos como o Cinema São Luiz, na Rua da Aurora, e o Art-Palácio, na Rua Matias de Albuquerque, se repetiu em cidades como Camaragibe, São Lourenço da Mata e Palmares, pintando o cenário cultural do estado através da expansão da sétima arte.</p>
        </section>

        <section className={styles.reportImage}>
          <p>No entanto, no início do século XXI, o cenário dos cinemas de rua pernambucanos mudou bruscamente, de forma em que a maior concentração de salas de cinema passou para a hegemonia dos shoppings centers. Com este cenário, coletivos, instituições e militantes do ramo cultural buscam superar o desinteresse por essas ferramentas, através de alternativas que possam revitalizá-las, de forma a dar continuidade ao legado destes espaços.</p>
          <img
            className={styles.illustration1}
            src="./images/session-disappearance/illustration-1.svg"
            alt=""
          />
        </section>

        <section className={styles.report}>
          <p>De acordo com Bárbara, integrante do Coletivo Cine Rua PE, os cinemas de rua nasceram através do interesse da iniciativa privada.</p>
        </section>

        <section>
          <Quote
            description="-Destaca Bárbara."
            quote="Cinemas de rua nasceram de forma privada, é por isso que tivemos tantos[...] Os cinemas que a gente conhece hoje, já associamos como uma responsabilidade do estado, ao patrimônio, das fundações de cultura, de acesso democrático, por que hoje ele está no espaço público, mas isso é uma coisa recente."
            inverted={true}
          />
        </section>
      </div>
    </div>
  );
}
