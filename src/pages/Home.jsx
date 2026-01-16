import React from 'react';
import GameCard from '../components/GameCard';
import NewsItem from '../components/NewsItem';
import FeatureBox from '../components/FeatureBox';

function Home() {
  const newsItems = [
    {
      title: 'JAILHILL - TRAILER DE GAMEPLAY DISPONÍVEL',
      date: '(10/11/2023)',
      content: 'O primeiro trailer de gameplay de JailHill está disponível. Confira a atmosfera aterrorizante e o sistema de combate único.'
    },
    {
      title: 'SISTEMA DE MÚLTIPLOS FINAIS REVELADO',
      date: '(05/11/2023)',
      content: 'Assim como Cyberpunk 2077, JailHill terá múltiplos finais baseados nas suas escolhas morais ao longo do jogo.'
    },
    {
      title: 'IA DO VILÃO É REVOLUCIONÁRIA',
      date: '(01/11/2023)',
      content: 'O vilão principal de JailHill aprende com suas ações e se adapta ao seu estilo de jogo, criando uma experiência única para cada jogador.'
    },
    {
      title: 'DEMO DISPONÍVEL NA STEAM NEXT FEST',
      date: '(25/10/2023)',
      content: 'Uma demo limitada de JailHill estará disponível durante o Steam Next Fest. Experimente os primeiros 30 minutos do jogo.'
    }
  ];

  const features = [
    {
      title: 'ATMOSFERA SILENT HILL',
      description: 'Reviva o terror psicológico clássico com gráficos atualizados'
    },
    {
      title: 'COMBATE RPG',
      description: 'Sistema de combate inspirado em Final Fantasy XV'
    },
    {
      title: 'IA ADAPTATIVA',
      description: 'Vilão que aprende e reage às suas ações'
    },
    {
      title: '6 FINAIS DIFERENTES',
      description: 'Suas escolhas determinam o destino de Hearth'
    }
  ];

  return (
    <div className="main-content">
      <div>
        <div className="content-box">
          <div className="content-header">JAILHILL - EXPERIMENTE O TERROR</div>
          
          <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
            <strong>JailHill</strong> leva os jogadores para uma prisão abandonada onde um massacre ocorreu. 
            Controle <strong>Hearth</strong>, um homem preso por um crime que não cometeu, e enfrente 
            assombrações que refletem seus piores medos e traumas.
          </p>
          
          <div style={{ textAlign: 'center', margin: '30px 0' }}>
            <button className="steam-button buy" style={{ padding: '15px 30px', fontSize: '18px' }}>
              COMPRAR JAILHILL - $29.99
            </button>
          </div>
        </div>

        <div className="content-box">
          <div className="content-header">ESCOLHA SEU PACOTE</div>
          
          <div className="package-container">
            <div className="package-box">
              <div className="package-title">PADRÃO</div>
              <div className="package-price">$29.99</div>
              <ul className="package-features">
                <li>Jogo Completo JailHill</li>
                <li>Trilha Sonora Digital</li>
                <li>Wallpapers Exclusivos</li>
              </ul>
              <button className="steam-button" style={{ width: '100%' }}>
                COMPRAR
              </button>
            </div>
            
            <div className="package-box" style={{ borderColor: '#ffcc00' }}>
              <div className="package-title" style={{ color: '#ffcc00' }}>DELUXE</div>
              <div className="package-price">$49.99</div>
              <ul className="package-features">
                <li>Tudo do Pacote Padrão</li>
                <li>DLC "Origens do Pesadelo"</li>
                <li>Skin Exclusiva para Hearth</li>
                <li>Arte Conceitual Digital</li>
                <li>Acesso Beta aos Próximos DLCs</li>
              </ul>
              <button className="steam-button buy" style={{ width: '100%' }}>
                COMPRAR
              </button>
            </div>
            
            <div className="package-box" style={{ borderColor: '#66c0f4' }}>
              <div className="package-title" style={{ color: '#66c0f4' }}>COLECTOR'S</div>
              <div className="package-price">$79.99</div>
              <ul className="package-features">
                <li>Tudo do Pacote Deluxe</li>
                <li>Figura de Hearth (30cm)</li>
                <li>Livro de Arte Físico</li>
                <li>Mapa da Prisão em Pôster</li>
                <li>Acesso à Soundtrack Completa</li>
              </ul>
              <button className="steam-button" style={{ width: '100%', background: '#66c0f4' }}>
                COMPRAR
              </button>
            </div>
          </div>
        </div>

        <div className="content-box">
          <div className="content-header">ÚLTIMAS NOTÍCIAS</div>
          <div className="news-container">
            {newsItems.map((news, index) => (
              <NewsItem
                key={index}
                title={news.title}
                date={news.date}
                content={news.content}
                isImportant={index === 0}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="sidebar">
        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ color: '#66c0f4', borderBottom: '2px solid #4a5b99', paddingBottom: '5px' }}>
            RECURSOS PRINCIPAIS
          </h3>
          {features.map((feature, index) => (
            <FeatureBox
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ color: '#66c0f4', borderBottom: '2px solid #4a5b99', paddingBottom: '5px' }}>
            ESPANHE O GLOBO
          </h3>
          <p style={{ fontSize: '14px', lineHeight: '1.4' }}>
            <strong>JailHill Multiplayer</strong><br/>
            $14.95<br/>
            Inclui modo cooperativo para 2 jogadores e modos competitivos. Experimente o terror com amigos!
          </p>
          <button className="steam-button" style={{ marginTop: '10px', width: '100%' }}>
            COMPRAR AGORA
          </button>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ color: '#66c0f4', borderBottom: '2px solid #4a5b99', paddingBottom: '5px' }}>
            SUPORTE TÉCNICO
          </h3>
          <p style={{ fontSize: '12px', lineHeight: '1.4' }}>
            Perguntas, respostas, etc.<br/>
            Nossa página de suporte oferece fóruns, lista de perguntas frequentes e o Solucionador de Problemas para ajudar a identificar e resolver qualquer problema técnico.
          </p>
          <button className="steam-button" style={{ marginTop: '10px', width: '100%', fontSize: '12px' }}>
            SUPORTE TÉCNICO
          </button>
        </div>

        <div>
          <h3 style={{ color: '#66c0f4', borderBottom: '2px solid #4a5b99', paddingBottom: '5px' }}>
            LICENCIAMENTO PARA CYBER CAFÉ
          </h3>
          <p style={{ fontSize: '12px', lineHeight: '1.4' }}>
            Jogos que seus clientes querem<br/>
            Se você administra um cyber café ou local de jogos, facilitamos para você trazer JailHill para seus clientes.
          </p>
          <button className="steam-button" style={{ marginTop: '10px', width: '100%', fontSize: '12px' }}>
            PROGRAMA CYBER CAFÉ
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
