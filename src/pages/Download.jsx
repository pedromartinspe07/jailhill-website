import React from 'react';

function Download() {
  const platforms = [
    {
      name: 'GOOGLE PLAY STORE',
      icon: '📱',
      description: 'Para dispositivos Android 8.0+',
      buttonText: 'BAIXAR PARA ANDROID',
      color: '#66c0f4'
    },
    {
      name: 'APP STORE',
      icon: '🍎',
      description: 'Para iPhone/iPad com iOS 12.0+',
      buttonText: 'BAIXAR PARA iOS',
      color: '#ff6b6b'
    },
    {
      name: 'DEMO PC (STEAM)',
      icon: '💻',
      description: 'Versão demo para Windows',
      buttonText: 'BAIXAR DEMO PC',
      color: '#4a6bc2'
    }
  ];

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
      <div className="content-box">
        <div className="content-header">DOWNLOAD JAILHILL</div>
        
        <p style={{ textAlign: 'center', fontSize: '16px', marginBottom: '30px' }}>
          Escolha sua plataforma para baixar JailHill
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          {platforms.map((platform, index) => (
            <div 
              key={index}
              className="content-box"
              style={{ 
                textAlign: 'center',
                borderColor: platform.color,
                margin: '0'
              }}
            >
              <div style={{ fontSize: '40px', marginBottom: '15px' }}>
                {platform.icon}
              </div>
              
              <h3 style={{ color: platform.color, marginBottom: '10px' }}>
                {platform.name}
              </h3>
              
              <p style={{ fontSize: '14px', marginBottom: '20px', minHeight: '40px' }}>
                {platform.description}
              </p>
              
              <button 
                className="steam-button" 
                style={{ 
                  width: '100%',
                  background: `linear-gradient(to bottom, ${platform.color} 0%, ${platform.color}99 100%)`
                }}
              >
                {platform.buttonText}
              </button>
            </div>
          ))}
        </div>
        
        <div style={{ marginTop: '40px', padding: '20px', background: 'rgba(0,0,0,0.3)', borderRadius: '4px' }}>
          <h3 style={{ color: '#ffcc00', marginBottom: '15px' }}>INSTRUÇÕES DE INSTALAÇÃO</h3>
          
          <ol style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
            <li>Clique no botão de download para sua plataforma</li>
            <li>Para Android: Permita instalação de fontes desconhecidas se necessário</li>
            <li>Para iOS: Confirme a instalação através da App Store</li>
            <li>Espere o download e instalação completarem</li>
            <li>Execute JailHill e ajuste as configurações gráficas conforme seu dispositivo</li>
            <li>Recomendamos usar fones de ouvido para melhor experiência</li>
          </ol>
          
          <div style={{ marginTop: '20px', fontSize: '12px', color: '#aaa' }}>
            <strong>Nota:</strong> JailHill requer aproximadamente 5GB de espaço livre. 
            Certifique-se de ter conexão Wi-Fi estável para o download.
          </div>
        </div>
        
        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <h3 style={{ color: '#66c0f4', marginBottom: '15px' }}>PROBLEMAS COM O DOWNLOAD?</h3>
          <button className="steam-button" style={{ marginRight: '10px' }}>
            SUPORTE TÉCNICO
          </button>
          <button className="steam-button" style={{ background: '#666' }}>
            PERGUNTAS FREQUENTES
          </button>
        </div>
      </div>
    </div>
  );
}

export default Download;
