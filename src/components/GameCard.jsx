import React from 'react';

function GameCard({ title, description, price, image, features, buttonText = 'COMPRAR AGORA' }) {
  return (
    <div className="content-box">
      <div className="content-header">{title}</div>
      
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>{description}</p>
          
          {features && (
            <ul className="package-features">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          )}
          
          <div style={{ marginTop: '20px' }}>
            {price && (
              <div style={{ fontSize: '24px', color: '#ffcc00', fontWeight: 'bold', marginBottom: '10px' }}>
                {price}
              </div>
            )}
            
            <button className="steam-button buy">
              {buttonText}
            </button>
          </div>
        </div>
        
        {image && (
          <div style={{ flex: '0 0 200px' }}>
            <img 
              src={image} 
              alt={title}
              style={{ 
                width: '100%', 
                border: '2px solid #4a5b99',
                borderRadius: '4px'
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default GameCard;
