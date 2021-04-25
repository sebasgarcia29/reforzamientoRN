import { useState } from 'react';

export const useCounter = (initial: number) => {
  const [valor, setValor] = useState(initial);

  const acumular = (numero: number) => {
    setValor(valor + numero);
  }
  return {
    valor,
    acumular,
  }
}
