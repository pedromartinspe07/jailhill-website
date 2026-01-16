import React from 'react';

function About() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <div className="content-box">
        <div className="content-header">SOBRE JAILHILL</div>
        
        <div style={{ lineHeight: '1.6', fontSize: '15px' }}>
          <p>
            <strong>JailHill</strong> é um jogo de horror psicológico em terceira pessoa que combina elementos de RPG com ação intensa. 
            Desenvolvido com a estética visual do PS3 para garantir performance em dispositivos móveis, o jogo oferece uma 
            experiência imersiva e aterrorizante.
          </p>
          
          <h3 style={{ color: '#66c0f4', marginTop: '20px' }}>HISTÓRIA</h3>
          <p>
            Você é <strong>Hearth</strong>, um homem injustamente condenado por um crime que não cometeu. Enviado para a Prisão Blackwood, 
            você descobre que o local foi palco de um massacre brutal anos atrás. Agora, assombrações perturbadoras tomam conta 
            dos corredores, e você deve sobreviver enquanto desvenda a verdade por trás do massacre.
          </p>
          
          <h3 style={{ color: '#66c0f4', marginTop: '20px' }}>CARACTERÍSTICAS PRINCIPAIS</h3>
          <ul style={{ paddingLeft: '20px', margin: '15px 0' }}>
            <li><strong>Sistema de Combate RPG:</strong> Combate estratégico inspirado em Final Fantasy XV</li>
            <li><strong>IA Adaptativa:</strong> Vilão principal que aprende com suas ações e se adapta</li>
            <li><strong>Múltiplos Finais:</strong> 6 finais diferentes baseados em suas escolhas morais</li>
            <li><strong>Atmosfera Silent Hill:</strong> Terror psicológico com monstros simbólicos</li>
            <li><strong>Gráficos PS3-like:</strong> Otimizado para mobile sem sacrificar a atmosfera</li>
          </ul>
          
          <h3 style={{ color: '#66c0f4', marginTop: '20px' }}>REQUISITOS DO SISTEMA</h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '15px' }}>
            <div className="content-box" style={{ margin: '0' }}>
              <div style={{ color: '#66c0f4', fontWeight: 'bold', marginBottom: '10px' }}>MÍNIMOS</div>
              <ul style={{ fontSize: '13px', paddingLeft: '15px' }}>
                <li><strong>Android:</strong> 8.0+, 4GB RAM, Snapdragon 835</li>
                <li><strong>iOS:</strong> 12.0+, iPhone 8 ou superior</li>
                <li><strong>Armazenamento:</strong> 5GB disponíveis</li>
                <li><strong>GPU:</strong> OpenGL ES 3.0 compatible</li>
              </ul>
            </div>
            
            <div className="content-box" style={{ margin: '0' }}>
              <div style={{ color: '#ffcc00', fontWeight: 'bold', marginBottom: '10px' }}>RECOMENDADOS</div>
              <ul style={{ fontSize: '13px', paddingLeft: '15px' }}>
                <li><strong>Android:</strong> 10.0+, 6GB RAM, Snapdragon 855</li>
                <li><strong>iOS:</strong> 14.0+, iPhone 11 ou superior</li>
                <li><strong>Armazenamento:</strong> 8GB disponíveis</li>
                <li><strong>GPU:</strong> Vulkan 1.1 compatible</li>
              </ul>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <button className="steam-button buy" style={{ padding: '12px 24px' }}>
              COMPRAR JAILHILL AGORA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
