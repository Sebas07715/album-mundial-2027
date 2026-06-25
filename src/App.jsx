import React, { useState } from "react";
import { stickers } from "./data/stickers";
import StickerCard from "./components/StickerCard";

// ETAPA 3: Inicializamos el estado de la colección con todas las figuritas en "falta"
const estadoInicialColeccion = stickers.reduce((acc, sticker) => {
  acc[sticker.id] = "falta";
  return acc;
}, {});

export default function App() {
  // Estado que maneja la colección completa indexada por id: { [id]: "falta" | "tengo" | "repetida" }
  const [collection, setCollection] = useState(estadoInicialColeccion);

  // ETAPA 3: Función que alterna cíclicamente el estado: falta -> tengo -> repetida -> falta
  const handleStatusChange = (id) => {
    setCollection((prev) => {
      const estadoActual = prev[id];
      let siguienteEstado = "falta";

      if (estadoActual === "falta") siguienteEstado = "tengo";
      else if (estadoActual === "tengo") siguienteEstado = "repetida";
      else if (estadoActual === "repetida") siguienteEstado = "falta";

      return {
        ...prev,
        [id]: siguienteEstado,
      };
    });
  };

  return (
    <div style={{ 
      padding: '20px', 
      fontFamily: 'sans-serif', 
      maxWidth: '1200px', 
      margin: '0 auto',
      backgroundColor: '#f8f9fa',
      minHeight: '100vh'
    }}>
      <header style={{ textAlign: 'center', marginBottom: '30px', padding: '10px 0', borderBottom: '2px solid #ddd' }}>
        <h1>⚽ Álbum Mundial 2026 ⚽</h1>
        <p>Haz clic en cualquier tarjeta para cambiar su estado de forma interactiva.</p>
      </header>

      {/* Renderizado de todas las figuritas usando el componente y el estado */}
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '10px', 
        justifyContent: 'center' 
      }}>
        {stickers.map((sticker) => (
          <StickerCard
            key={sticker.id}
            number={sticker.code}
            name={sticker.name}
            group={sticker.section}
            status={collection[sticker.id]} // Le pasamos el estado dinámico actual
            onClick={() => handleStatusChange(sticker.id)} // Ejecuta el cambio cíclico al hacer click
          />
        ))}
      </div>
    </div>
  );
}