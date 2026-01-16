import React from 'react';

function Footer() {
  return (
    <footer className="steam-footer">
      <div className="footer-links">
        <a href="#privacy">Política de Privacidade</a>
        <a href="#legal">Informações Legais</a>
        <a href="#eula">Acordo de Assinante</a>
        <a href="#cookies">Cookies</a>
        <a href="#refunds">Reembolsos</a>
      </div>
      
      <div style={{ margin: '15px 0' }}>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/3/3d/ESRB_2013_Mature_17%2B.png" 
          alt="ESRB Mature 17+"
          style={{ height: '40px', marginRight: '20px' }}
        />
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6a/PEGI_18.svg" 
          alt="PEGI 18"
          style={{ height: '40px' }}
        />
      </div>
      
      <div style={{ fontSize: '11px', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
        © 2023 JailHill Productions. Todos os direitos reservados. Todas as marcas são propriedade de seus respectivos donos.
        <br/>
        Silent Hill é uma marca registrada da Konami Digital Entertainment. Final Fantasy é uma marca registrada da Square Enix.
        <br/>
        Este é um projeto fã-made não oficial. Não afiliado com Konami ou Square Enix.
      </div>
    </footer>
  );
}

export default Footer;
