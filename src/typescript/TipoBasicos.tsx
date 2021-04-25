import React from 'react'

export const TipoBasicos = () => {

  const nombre: string = 'Sebas';
  const edad: number = 25;
  const activo: boolean = true;
  const poderes: string[] = []; // 'Velocidad', 'volar', 'Respirar en el agua'

  poderes.push('ole')


  return (
    <div className='mt-2'>
      <h1>Tipos Basicos</h1>
      {nombre}, {edad} , {(activo) ? 'Activo' : 'Inactivo'}
      <br />
      {poderes.join(', ')}
    </div>
  )
}
