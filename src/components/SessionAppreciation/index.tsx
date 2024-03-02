'use client';

import styles from "./styles.module.css";

export default function SessionAppreciation() {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img className={styles.image} src="/images/time-line.svg" alt="" />

        <section className={styles.report}>
          <p>Nas décadas seguintes, de uma forma geral, houve uma recuperação do mercado exibidor, com salas localizadas em shoppings, locais de maior renda. Mesmo nesse cenário diferente, o cinema de rua resistiu às mudanças comportamentais.</p>
        
          <p>O cinema de rua resistiu pois mostrou que a cultura é muito mais que entretenimento. Esses espaços são ambientes autênticos e muitas vezes históricos, instrumentos de acesso à cultura porque colaboram com a democratização da comunicação com preços mais acessíveis e filmes que fogem da lógica da exibição comercial.</p>
        
          <p>O tradicional Cinema São Luiz, no Recife, está fechado há mais de um ano para reforma no sistema de esgoto e no teto da construção. O fechamento é retratado em “Retratos Fantasmas”, de acordo com o próprio Kleber Mendonça Filho. Segundo a Folha de Pernambuco, a governadora Raquel Lyra disse à imprensa que o cinema será reaberto em 2024, mas não entrou em detalhes em que momento do próximo ano. <span>Enquanto isso, esperamos</span>.</p>
        </section>

        <div className={styles.photo}>
          <img src="/images/carousel/carousel-2.png" alt="" />
          <figcaption>Foto: Rafael Bandeira/LeiaJá Imagens/Arquivo</figcaption>
        </div>

        <section className={styles.report}>
          <p>Recife já foi uma “Hollywood Brasileira” na década de 1920. O período conhecido como “Ciclo do Recife”. O próprio “Retratos Fantasmas”, a partir das salas de cinema, fala sobre a relação das pessoas com as mudanças urbanas que aconteceram no Recife. Os cinemas de rua dão espaço para a produção local e para experimentações no campo audiovisual, abrindo portas para além das histórias que Hollywoodianas.</p>

          <p>É necessário refletir, dada a importância do cinema de rua, sobre como construir e incorporar esse tipo de cinema ao tecido urbano e à vida da cidade atual. A lógica do cinema de rua não envolve a lógica comercial, na realidade, cumpre um papel em termos ambientais, econômicos e culturais. A característica mais particular é a de possibilitar o conhecimento e trazer sessões que dialoguem com o público de modo acessível e democrático.</p>        
        </section>

        <section className={styles.author}>
          <h1 className={styles.title}>A VALORIZAÇÃO DOS CINEMAS DE RUA</h1>
          <h2>como equipamentos culturais <br /> que preservam a história</h2>
          <h4>Thiago Freire</h4>
        </section>

        <section className={styles.report}>
          <p>No cenário cultural brasileiro, os cinemas de rua são testemunhas históricas de uma época em que as telas marcavam a conexão com mundos desconhecidos e as salas ecoavam com risos, lágrimas e aplausos do público, fazendo da ida ao cinema um momento único, uma experiência que desconhecemos hoje devido à grande acessibilidade que as tecnologias digitais permitem. Devido a isso, enquanto olhamos a memória cinematográfica do Brasil e de Pernambuco, não podemos ignorar o silêncio e o descaso que envolvem esses espaços que em outros momentos já foram tão valorizados.</p>

          <p>Na primeira metade do século XX, Recife assumia um lugar de destaque no cenário cultural e cinematográfico do país, período que ficou conhecido como o Ciclo do Recife. Na década de 1920, as produções cinematográficas pernambucanas, como as da Aurora-Film, como "Aitaré da Praia", "A Filha do Advogado" e "Jurando Vingar", ganharam destaque por todo o país, colocando a cidade no mapa como um dos principais polos cinematográficos do Brasil.</p>        
        </section>


        <section className={styles.reportImage}>
          <img src="/images/cinema-moderno.svg" alt="" />
          <p>Foi nesse contexto que os primeiros cinemas de bairro surgiram em Recife. O Cinema do Pina, o Glória, o Moderno - este último inicialmente construído como teatro e transformado em cinema em 1931 - e tantos outros se tornaram não apenas locais de entretenimento, mas também espaços de encontro e intercâmbio cultural. Essas salas eram locais de exibição de filmes e também de celebração da diversidade cultural de Pernambuco e do Brasil, conectando as comunidades através das narrativas projetadas nas telas.</p>
        </section>

        <section className={styles.report}>
          <p>A capital pernambucana foi o berço de aproximadamente 55 cinemas de rua, cada um com sua própria história para contar. Mas, a partir do final do século XX, à medida que os shoppings se multiplicavam, os cinemas de rua começaram a perder terreno. A migração para os complexos de cinema dentro dos shoppings, com a promessa de conforto e segurança, marcou o início de um declínio gradual, porém implacável, para muitos desses equipamentos culturais.</p>

          <p>A especulação imobiliária também desempenhou um papel decisivo nesse cenário de mudança. Os cinemas, muitos deles localizados em áreas privilegiadas e de grande porte, tornaram-se alvos para empreendimentos comerciais, deixando para trás o legado de décadas de história.</p>

          <p>Mais recentemente, com o surgimento dos serviços de streaming, a reconfiguração da forma de se consumir conteúdos audiovisuais impactou mais uma vez a cultura cinematográfica, atingindo inclusive as grandes companhias de exibição. À medida que as telas migraram dos cinemas para as salas de estar, o ritual de ir ao cinema tornou-se mais raro. Segundo uma pesquisa da consultoria Comscore, em parceria com a empresa americana Siprocal, uma pessoa no Brasil mantinha em média a assinatura de oito serviços de streaming em 2023.</p>      
        
          <span className={styles.highlight}>Nesse cenário, os cinemas de rua se tornam ainda mais isolados, ficando cada vez mais restritos a públicos específicos, como cinéfilos e pessoas com com maior acesso à formação cultural, o que é uma perda para a população geral, ao mesmo tempo em que dificulta a manutenção dessas dessas ferramentas.</span>
        </section>
      </div>
    </div>
  )
}