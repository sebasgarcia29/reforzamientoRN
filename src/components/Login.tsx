import React, { useEffect, useReducer } from 'react';

interface AuthState {
  validando: boolean;
  token: string | null;
  username: string;
  nombre: string;
}

const initialState = {
  validando: true,
  token: null,
  username: '',
  nombre: '',
}

type LoginPayload = {
  username: string,
  nombre: string,
}

type AuthAction =
  | { type: 'logout' }
  | { type: 'login', payload: LoginPayload }

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'logout':
      return { validando: false, token: null, nombre: '', username: '' };
    case 'login':
      const { nombre, username } = action.payload;
      return {
        validando: false,
        token: 'ABC123',
        nombre,
        username,
      };
    default:
      return state;
  }
}

export const Login = () => {

  const [state, dispatch] = useReducer(authReducer, initialState);
  const { nombre, token, validando } = state;

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'logout' })
    }, 1500);
  }, []);

  if (validando) {
    return (
      <>
        <div className='alert alert-info'>Validando...</div>
      </>
    )
  }

  const handleClickLogin = () => {
    dispatch({
      type: 'login',
      payload: {
        nombre: 'Sebastian',
        username: 'sebasgarcia29'
      }
    });
  }

  const handleClickLogout = () => {
    dispatch({ type: 'logout' });
  }

  return (
    <div>
      <h3>Login</h3>
      {
        (
          token ?
            <div className='alert alert-success'>Auntenticado como: {nombre} </div>
            : <div className='alert alert-danger'>No auntenticado</div>
        )
      }

      {
        (
          token ?
            (<button
              className='btn btn-danger'
              onClick={handleClickLogout}

            >
              Logout
            </button>)
            :
            (<button
              className='btn btn-primary'
              onClick={handleClickLogin}
            >
              Login
            </button>)
        )
      }




    </div>
  )
}
