import { useEffect, useRef, useState } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';



export const useUsuarios = () => {

  const [usuarios, setusuarios] = useState<Usuario[]>([]);

  const refPage = useRef(1)

  useEffect(() => {
    // Llamado API
    cargarUsuarios();
  }, []);



  const cargarUsuarios = async () => {
    const resp = await reqResApi.get<ReqResListado>('/users', {
      params: {
        page: refPage.current,
      }
    });

    if (resp.data.data.length > 0) {
      setusuarios(resp.data.data);
    } else {
      refPage.current--;
      alert('No hay mas registros')
    }
  }

  const paginaSiguiente = () => {
    refPage.current++;
    cargarUsuarios();
  }
  const paginaAnterior = () => {
    if (refPage.current > 1) {
      refPage.current--;
      cargarUsuarios();
    }
  }

  return {
    usuarios,
    paginaSiguiente,
    paginaAnterior,
  }
}