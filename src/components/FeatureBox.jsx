import React from 'react';

function FeatureBox({ title, description }) {
  return (
    <div style={{ 
      background: 'linear-gradient(to right, rgba(74, 107, 194, 0.2) 0%, transparent 100%)',
      borderLeft: '3px solid #4a6bc2',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '0 4px 4px 0'
    }}>
      <div style={{ 
        color: '#66c0f4', 
        fontWeight: 'bold', 
        fontSize: '14px',
        marginBottom: '5px'
      }}>
        {title}
      </div>
      <div style={{ fontSize: '12px', color: '#aaa' }}>
        {description}
      </div>
    </div>
  );
}

export default FeatureBox;
