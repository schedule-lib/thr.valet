import Head from "next/head";
import NextImage from "next/image";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Serviço de valet em campinas | THR Valet</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainContainer}>
        <section>
          <img src="https://madini.com.br/wp-content/uploads/2021/09/Servi%C3%A7o-de-Valet-para-lojas-em-sp.png" alt="ilustração de serviço de valet em campinas" />
          <h1>Serviço de Valet para Loja em São Paulo</h1>
        </section>

        <section>
          <p>A Madini é uma empresa com mais de 18 anos no mercado que presta serviço de valet para loja em São Paulo. Trabalhamos com a missão de atender todas as necessidades dos clientes que buscam um serviço de valet para loja em São Paulo.</p>

          <p>
            <img src="https://madini.com.br/wp-content/uploads/2021/09/WhatsApp-Image-2021-08-03-at-10.41.00-1-300x300.jpeg" alt="realizando serviço de valet" />
            <p>Possuímos uma excelente estrutura para atender todas as demandas por serviço de valet para loja em São Paulo com muita competência e profissionalismo. Disponibilizamos o mais completo serviço de valet para loja em São Paulo.</p>

            <p>Informações sobre o serviço de valet para loja em São Paulo.</p>
          </p>
          <p>A Madini Multisserviços oferece serviço de valet para loja em São Paulo com a melhor relação custo-benefício do mercado. O serviço de valet para loja em São Paulo é uma solução bastante indicada para estabelecimentos que não possuem estacionamento próprio.</p>

          <p>A empresa conta com uma equipe de profissionais altamente treinados e qualificados para a execução do serviço de valet para loja em São Paulo. Proporcionamos maior tranquilidade e conforto para seus clientes com o serviço de valet para loja em São Paulo.</p>

          <p>O serviço de valet para loja em São Paulo permite que os veículos sejam estacionados com muita segurança.</p>

          <h2>A Madini Multisserviços oferece serviço de valet para loja em São Paulo.</h2>

          <p>Entre em contato com a Madini Multisserviços para contratar o serviço de valet para loja em São Paulo.</p>

          <h3>Como obter um orçamento deste serviço?
            </h3>

            <p>
              Muito simples. Abaixo temos nossos canais de contato, solicite um orçamento sem compromisso e veja a diferença que nossos consultores trará para seu negócio ou empresa.
            </p>
        </section>
      </main>
    </div>
  );
}
