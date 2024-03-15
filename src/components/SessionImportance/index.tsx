'use client';

import Chart from "../Chart";
import styles from "./styles.module.css";

export default function SessionImportance() {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>OCUPAÇÃO DO ESPAÇO PÚBLICO PELA ÓTICA DO CINEMA EM RECIFE - CULTURA É RESISTÊNCIA!</h1>
        <img className={styles.image} src="./images/cinema.svg" alt="" />

        {/* <Chart /> */}

        <section className={styles.author} id="cinema-de-rua">
          <h1>CINEMA DE RUA</h1>
          <h2>e sua importância</h2>
          <h4>Beatriz Severo</h4>
        </section>

        <section className={styles.report}>
          <p>O documentário “Retratos Fantasmas” (2023), de Kleber Mendonça Filho, é uma construção afetiva da história da cidade do Recife e da sua relação com a sétima arte, o Cinema. Traduzido também por meio de linguagens fotográficas e dividido em três partes principais, a narrativa expõe a situação do centro do Recife, contando, através dos cinemas de rua, parte da história da cidade.</p>

          <p>Os Cinemas de rua são salas de cinema localizadas em edifícios tradicionais, geralmente situados em áreas urbanas centrais e, são conhecidos por sua variedade de programação que inclui desde grandes lançamentos até filmes independentes, clássicos do cinema e produções locais. É também um instrumento de acesso à cultura, permitindo que uma quantidade maior de pessoas possam assistir a uma sessão a um valor de um ingresso mais acessível que os dos complexos multiplex.</p>

          <p>Os Cinemas de rua são salas de cinema localizadas em edifícios tradicionais, geralmente situados em áreas urbanas centrais e, são conhecidos por sua variedade de programação que inclui desde grandes lançamentos até filmes independentes, clássicos do cinema e produções locais. É também um instrumento de acesso à cultura, permitindo que uma quantidade maior de pessoas possam assistir a uma sessão a um valor de um ingresso mais acessível que os dos complexos multiplex.</p>

          <p>No Brasil, foi entre as décadas de 1900 e 1930 que os cinemas de rua começaram a ser inaugurados nas cidades, como a primeira sala de cinema de Belo Horizonte no Teatro Paris, de 1906, e o Cine Art Palácio em São Paulo, de 1936. Esses espaços eram localizados nos centros, e eram conhecidos por estarem em terrenos valorizados. No interior, esses espaços tiveram seu auge durante as décadas de 1930 e 1960.</p>

          <p>Vale ressaltar que esses cinemas movimentaram as ruas das cidades, sendo uma das principais atividades de lazer da época. Normalmente, eles ficavam próximos uns dos outros, gerando ao redor uma grande concentração de outros serviços relacionados a esta atividade, como cafés, bares, produtoras, entre outros. Sem contar os trabalhadores envolvidos na manutenção, segurança, entre outros empregos gerados em razão da atividade. Em São Paulo, por exemplo, os cinemas caracterizavam por certo período avenidas centrais como São João e Ipiranga, ao mesmo tempo que, respondendo à crise econômica e à desigualdade social, definiu também regiões como a Boca do Lixo.</p>
        
          <p>No entanto, na década de 1970, com a expansão do consumo, a chegada da televisão, do VHS e com o crescimento das metrópoles e especulação imobiliária, muitas salas foram fechando. Esse processo não apenas dificultou o acesso das comunidades a este lazer, como também contribuiu para a perda da identidade urbana, substituindo espaços de convívio por espaços privatizados. Esse fenômeno social ocorreu com mais força na década de 1990, com o crescimento dos shoppings centers. A partir daí, surgiu uma nova forma de consumir o audiovisual, incitando inclusive, a queda da produção cinematográfica nacional e uma maior propagação por filmes estrangeiros ou aqueles que tenham a chance de apresentar alta bilheteria.</p>
        </section>
      </div>
    </div>
  )
}