'use client';


import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/Map"), {
  loading: () => <div>"Loading..."</div>,
  ssr: false,
})
import Carousel from "../Carousel";

import styles from "./styles.module.css";

const carouselImagesOpen = new Array(4).fill(null).map((_, i) => `./images/carousel-open/carousel-open-${i+1}.jpg`)
const carouselImagesClosed = new Array(2).fill(null).map((_, i) => `./images/carousel-closed/carousel-closed-${i+1}.jpg`)


export default function SessionPanorama() {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <section className={styles.author}>
          <h1 className={styles.title}>PANORAMA DO CINEMA NO PAÍS</h1>
          <h4>Letícia Barbosa</h4>
        </section>

        <section className={styles.report}>
          <p>Apenas 9% dos municípios brasileiros possuem salas de exibição de filmes. Os dados são do Sistema do Sistema de Informação e Indicadores Culturais (SIIC) , do Instituto Brasileiro de Geografia Estatística, para os anos de 2011 a 2022. O levantamento estima ainda que 42% da população brasileira vive sem esse equipamento cultural. De acordo com Leonardo Athias, pesquisador responsável pelo estudo, o cinema foi o que mais mostrou desigualdade territorial em relação a outros meios como, museus e teatros, concentrando-se na região Sul e Sudeste.</p>
        
          <p>Ainda sobre os critérios geográficos de acesso ao cinema, o SIIC revela que em todas as regiões o equipamento também lidera os índices quando o assunto é a dificuldade para chegar ao local, demandando mais de uma hora. A região Nordeste conta com 45% das pessoas que precisam em média desse tempo ou mais para se deslocar até a sala, ficando atrás apenas da região Norte. Além da questão territorial, raça e escolaridade também são fatores relevantes no acesso ao cinema no Brasil.</p>
        
          <p>No que diz respeito a Pernambuco, 52% da população tem cinema em sua cidade. Deste total, 50,9% são pessoas pardas e pretas e 54,3% são brancas. Quanto à escolaridade, 43,9% não concluiu o ensino fundamental, 53 % não terminou o ensino médio e 70,2% são de pessoas com ensino superior.</p>

          <p>O SIIC não diferencia os chamados “cinemas de rua” e as salas localizadas no interior de shoppings e galerias. Entretanto, há um movimento de algumas décadas para cá de transformação dos cinemas de rua em outros empreendimentos ou mesmo no abandono dos equipamentos. Neste cenário, não é difícil concluir que se os dados não são tão animadores para o setor no país, certamente, são ainda mais preocupantes em relação aos espaços localizados fora dos centros de compras.</p>
        </section>

        <section className={styles.reportMap}>
          <h1 className={styles.title}>E OS CINEMAS DE PERNAMBUCO?</h1>
          <div className={styles.map}><Map /></div>
          
          <p>Assumindo a missão de identificar os equipamentos culturais desse tipo no país, o Coletivo Cine Rua PE , elaborou um mapa afetivo participativo - isto é, com a colaboração de quem topasse enviar suas memórias desses espaços - com os Cinemas de Rua ativos, fechados temporariamente e desativados. De acordo com o documento, Pernambuco conta com 3 em funcionamento, 2 com utilização interrompida e 10 que já passaram pelas cidades, mas deixaram de existir.</p>
        
          <p>A metodologia de mapeamento participativo exige que as pessoas indiquem as salas, por isso, algumas ficaram de fora. Na verdade, estima-se que Pernambuco já teve em torno de mais de 100 salas de cinema de rua. Abertos permanecem o Cine-teatro do Parque e o Cinema da Fundação Joaquim Nabuco, no Recife, o Theatro Cinema Guarany, em Triunfo, e o Cine-teatro São José, em Afogados da Ingazeira. Em funcionamento, porém, fechados estão o Cinema São Luiz, na capital pernambucana, e o Cinema Rio Branco, em Arcoverde.</p>
        </section>

        <section className={styles.movieTheaters}>
          <h1 className={styles.title} style={{"color": "#9B1915"}}>abertos</h1>
          <div className={styles.carouselContainer}>
            <Carousel 
              images={carouselImagesOpen}
              autoPlay={false}
              showArrows
              showIndicators
              height={"450px"}
            />
          </div>

          <h1 className={styles.title} style={{"color": "#9B1915"}}>fechados temporariamente</h1>
          <div className={styles.carouselContainer}>
            <Carousel
              images={carouselImagesClosed}
              autoPlay={false}
              showArrows
              showIndicators
              height={"450px"}
            />
          </div>
        </section>

        <section className={styles.report}>
          <h1 className={styles.title} style={{"marginBottom": "30px"}}>uma pandemia no meio do caminho:</h1>

          <p>Entre os obstáculos de manter salas de cinema no geral em funcionamento, está a atratividade desses locais. Fatores diversos, como a popularização dos serviços de streaming, contribuem para a redução de espectadores que optam por se deslocar para vivenciar a experiência de assistir a filmes coletivamente. Para os cinemas de rua, há ainda o desafio da tendência ao emparedamento das atividades e a gentrificação dos espaços públicos.</p>
        
          <p>Neste contexto, a pandemia de COVID 19, que acometeu o mundo em 2020, intensificou o afastamento das pessoas dos cinemas. De acordo com o Painel Indicadores do Mercado de Exibição, organizado pela Agência Nacional de Cinema (Ancine), em 2023, o público que assistiu filmes em salas de cinema foi 34% menor do que em 2019. Porém, o panorama também verificou aumento de 19, 4% de 2022 para o ano passado. Dessa forma, é possível constatar que o setor vem melhorando desde as infecções pelo coronavírus, mas a passos lentos.</p>
        
          <p>Durante a pandemia, o setor cultural e de eventos foi um dos primeiros a ser paralisado e, com a flexibilização, o último a voltar a funcionar normalmente. Somado a isso, a mudança de hábitos incentivada pelo isolamento social impactou o comportamento da sociedade no período de reabertura dos serviços. As pessoas investiram em seus lares, onde passavam mais tempo e usufruíram de alternativas de lazer que não exigiam grandes deslocamentos, altos custos e, principalmente, experiências coletivas vivenciadas presencialmente. Neste caso, ao “ir ao cinema” sofreu os efeitos dessas transformações.</p>

          <p>Além disso, a produção cinematográfica demanda um processo mais longo, isto é, com o processo de flexibilização, gravações e outras etapas foram sendo retomadas. Daí até termos produtos audiovisuais prontos, várias fases se sucedem. Assim, um fluxo menor de filmes para o cinema são colocados em exibição.</p>
        </section>
      </div>
    </div>
  )
}