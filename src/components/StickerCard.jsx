import React from 'react';

export default function StickerCard({ number, name, group, status, onClick }) {
  
  // Función para cambiar el color de fondo dinámicamente según el estado
  const getBackgroundColor = () => {
    switch (status) {
      case 'tengo':
        return '#d4edda'; // Verde claro
      case 'repetida':
        return '#fff3cd'; // Amarillo claro
      case 'falta':
      default:
        return '#e2e3e5'; // Gris claro
    }
  };

  // Función para cambiar el color del borde y texto según el estado (opcional, para mejor diseño)
  const getBorderColor = () => {
    switch (status) {
      case 'tengo': return '#c3e6cb';
      case 'repetida': return '#ffeeba';
      case 'falta': default: return '#d6d8db';
    }
  };

  return (
    <div 
      onClick={onClick}
      style={{
        backgroundColor: getBackgroundColor(),
        borderColor: getBorderColor(),
        borderWidth: '2px',
        borderStyle: 'solid',
        borderRadius: '8px',
        padding: '15px',
        margin: '10px',
        textAlign: 'center',
        cursor: 'pointer',
        width: '150px',
        display: 'inline-block',
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
        transition: 'transform 0.2s, box-shadow 0.2s',
        userSelect: 'none'
      }}
    >
      {/* Número o Código de la figurita */}
      <div style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '8px' }}>
        {number}
      </div>
      
      {/* Nombre del Jugador */}
      <div style={{ fontSize: '1rem', fontWeight: '500', minHeight: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {name}
      </div>
      
      {/* Grupo o Sección del álbum */}
      <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '8px' }}>
        {group ? group : 'Especial'}
      </div>

      {/* Texto de Estado actual */}
      <div style={{ fontSize: '0.75rem', fontWeight: 'bold', marginTop: '10px', textTransform: 'uppercase' }}>
        {status}
      </div>
    </div>
  );
}