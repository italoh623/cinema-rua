"use client";

import styles from "./styles.module.css";

export default function Motivation() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>O QUE NOS MOTIVOU?</h1>
        <h2 className={styles.subtitle}>um pouco sobre o projeto</h2>

        <section className={styles.motivation}>
          <p>
            O projeto, liderado por estudantes de Design, Engenharia da
            Computação e Jornalismo, concentra-se em destacar a relevância
            histórica e cultural do Cinema de Rua em Pernambuco, uma forma de
            expressão artística e entretenimento popular que enfrenta sérios
            desafios devido à crescente desvalorização e ao fechamento de
            diversas salas na região.
          </p>
          <p>
            Ao longo das últimas décadas, o Cinema de Rua em Pernambuco tem
            testemunhado um declínio preocupante, com muitas de suas icônicas
            salas de projeção fechando suas portas devido a uma combinação de
            fatores, como a concorrência com os cinemas multiplex e a falta de
            investimento e manutenção.
          </p>

          <p>
            Essas salas de cinema, que costumavam ser centros culturais e
            sociais em suas comunidades, agora enfrentam o risco de serem
            esquecidas ou demolidas, perdendo não apenas um espaço para a
            exibição de filmes, mas também um local que desempenhou um papel
            significativo na vida cultural e na identidade local.
          </p>

          <p>
            O projeto busca sensibilizar a população sobre a importância de
            preservar esses locais históricos, não apenas como espaços para
            assistir a filmes, mas também como símbolos de memória coletiva,
            arte e diversidade cultural.
          </p>
        </section>

        <img
          className={styles.image}
          src="./images/about/separator.svg"
          alt=""
        />

        <section className={styles.more}>
          <h2>gostou da nossa ideia?</h2>
          <p>
            Saiba que ela não para por aqui. Fique ligado em diversos coletivos
            que ajudam na preservação dos cinemas de rua.
          </p>
          <p>Aproveite e siga-os lá no Instagram:</p>
          <div className={styles.instagram}>
            <li>
              <a href="https://www.instagram.com/cineruape/" target="_blank">
                @cineruape
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/salveosaoluiz/"
                target="_blank"
              >
                @salveosaoluiz
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/manguetownrevista/"
                target="_blank"
              >
                @manguetownrevista
              </a>
            </li>
          </div>
        </section>
      </div>
    </div>
  );
}
