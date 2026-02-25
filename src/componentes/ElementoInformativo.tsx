// Definimos los tipos de las propiedades (props)
interface ElementoProps {
  titulo: string;
  parrafo: string;
  urlImagen: string;
}

// El componente recibe las props y las usa en el JSX
export function ElementoInformativo({ titulo, parrafo, urlImagen }: ElementoProps) {
  return (
    <div style={{
      border: '1px solid #eee',
      borderRadius: '10px',
      padding: '20px',
      maxWidth: '400px',
      margin: '10px auto',
      textAlign: 'center',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}>
      <img 
        src={urlImagen} 
        alt={titulo} 
        style={{ width: '100%', borderRadius: '8px', height: '200px', objectFit: 'cover' }} 
      />
      <h2 style={{ color: '#333' }}>{titulo}</h2>
      <p style={{ color: '#666', lineHeight: '1.5' }}>{parrafo}</p>
    </div>
  );
}