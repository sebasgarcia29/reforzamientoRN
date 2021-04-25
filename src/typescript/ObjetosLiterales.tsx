import React from 'react'


interface Persona {
  nombreCompleto: string;
  edad: number;
  direccion: Direccion;
}

interface Direccion {
    pais: string;
    casaNo: number;
}


export const ObjetosLiterales = () => {

  const persona: Persona = {
    nombreCompleto: 'Sebastian',
    edad: 25,
    direccion: {
      pais: 'Colombia',
      casaNo: 2
    }
  }



  return (
    <div>
      <h3>Objetos Literales</h3>
      <br />
      <code>
        <pre>
          {JSON.stringify(persona, null, 2)}
        </pre>
      </code>
    </div>
  )
}
