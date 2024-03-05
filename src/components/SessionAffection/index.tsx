"use client";

import Quote from "../Shared/Quote";
import styles from "./styles.module.css";

export default function SessionAffection() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <section className={styles.author}>
          <h1>AFETIVIDADE</h1>
          <h2>no cinema e na cidade</h2>
          <h4>Leandro Lopes</h4>
        </section>

        <section className={styles.reportImage}>
          <img
            className={styles.illustration1}
            src="./images/session-affection/illustration-1.svg"
            alt=""
          />
          <p>
            Caminhar pelo centro da cidade está se tornando cada vez mais
            desafiador; a insegurança contribui para o afastamento da população
            e a falta de políticas públicas amplia a carência de qualidade no
            espaço. Em fevereiro de 2024, um turista que chegou à capital
            pernambucana para curtir o carnaval do estado foi ferido com uma
            facada durante um assalto, no bairro da Boa Vista, Zona Central do
            Recife (matéria veiculada pelo Jornal do Commercio), evidenciando
            uma grande ruptura que a cidade enfrenta.
          </p>
        </section>

        <section className={styles.report}>
          <h1 className={styles.subtitle + " " + styles.textCenter}>
            mas, qual é a relação entre a insegurança e a afetividade com a
            cidade, e como isso se relaciona com o cinema?
          </h1>
          <p>
            Quando se trata do medo da população circular pelo centro da cidade,
            devido à violência e à criminalidade, todo o espaço sofre. A falta
            de cidadãos comprando ou, simplesmente, não transitando pelas ruas
            Imperial, Nova, das Calçadas e Avenida Guararapes, revela uma
            realidade cruel que afeta não só os cinemas, mas toda a economia da
            região.
          </p>
          <div className={styles.photo}>
            <img src="./images/session-affection/photo-1.png" alt="" />
            <figcaption>
              Imagem retirada do vídeo do Guto Canal Solar/YouTube
            </figcaption>
          </div>
        </section>

        <section className={styles.reportImage}>
          <img
            className={styles.saoLuis}
            src="./images/session-affection/cinema-sao-luis.svg"
            alt=""
          />
          <p>
            Falar sobre afetividade sem poder pertencer seguramente à cidade é
            um desafio, pois como criar laços se as pessoas não frequentam os
            espaços, sejam culturais ou de necessidades comuns, como
            supermercados e padarias? O medo e a carência de políticas públicas
            contribuem para o apagamento sistemático de lugares como, por
            exemplo, o Cinema São Luiz, que está fechado há quase dois anos.
          </p>
          <div>
            <p>
              O cineasta Daniel Bandeira recorda com um olhar de alegria, mas
              também com um sentimento de preocupação, as noites boêmias que ele
              costumava ter quando se sentia parte integrante e conseguia
              construir afetividade nos cinemas. "Desde a minha infância, meus
              pais costumavam me levar para o centro do Recife, onde assistia a
              muitos filmes com eles no Ritz e no Astor, que ficavam perto do 13
              de maio. Todo filme dos Trapalhões passava por lá. Você
              atravessava a rua e tinha o Parque 13 de Maio, andava mais um
              pouco e tinha a Livro 7, e um pouquinho mais e chegava ao São
              Luiz", relembra Bandeira.
            </p>
          </div>
        </section>

        <section>
          <Quote
            description="Mesmo sorridente, Bandeira destaca:"
            quote="A gente sabe o que acontece quando as coisas saem do imaginário das pessoas, elas são facilmente esquecidas."
          />
        </section>

        <section className={styles.report}>
          <p>
            Quando ele expressa esse pensamento, transmite um raciocínio sobre a
            falta de pertencimento e, consequentemente, sobre a perda da
            afetividade dos espaços, o que torna a cidade algo distante e
            estranho.
          </p>
          <p>
            Diante deste desafio, os cinemas de rua estão deixando de fazer
            parte do imaginário de uma parcela da população devido à falta de
            atenção governamental. Lutar pela sétima arte de rua não é apenas
            importante, é essencial para a construção e desenvolvimento das
            futuras gerações. A ausência de um Cinema São Luiz, Trianon ou Art
            Palácio em funcionamento cria uma lacuna significativa na
            afetividade da comunidade.
          </p>
          <p>
            Nesse sentido, a importância de melhorar a cidade para que a
            afetividade pelos cinemas retorne é primordial. Daniel Bandeira
            destaca: "Uma coisa é você ter uma sala tecnicamente ajustável,
            confortável, e outra é você desenvolver nas pessoas o hábito de ir
            ao cinema." Até o fechamento mais recente do São Luiz, ele era
            considerado o ponto alto do centro do Recife, mas essa importância
            deve ser mantida.
          </p>
        </section>

        <section className={styles.report}>
          <h1
            className={styles.subtitle}
            style={{ marginTop: "30px", marginBottom: "25px" }}
          >
            a lição aprendida é clara:
          </h1>
          <p>
            Se não cuidarmos do ambiente ao redor, se permitirmos que ele se
            deteriore, a joia perderá seu brilho. O Cinema São Luiz tem
            potencial para ser mais do que uma simples sala de exibição de
            filmes; ele pode ser o epicentro de uma série de atividades. Ao
            redor dele, podem surgir polos gastronômicos, melhorias no
            transporte público e medidas de segurança - tudo isso pode ser
            pensado a partir desse ponto.
          </p>
        </section>

        <img
          className={styles.image}
          src="./images/session-affection/illustration-2.svg"
          alt=""
        />
        <img
          style={{ "opacity": "0", "position": "relative" }}
          className={styles.image}
          src="./images/session-affection/illustration-2.svg"
          alt=""
        />
      </div>
    </div>
  );
}
