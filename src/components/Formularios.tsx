import { useForm } from '../hooks/useForm';

const initialState = {
  email: 'test@test.com',
  password: '123456'
};

export const Formularios = () => {

  const { onChange, email, password, formulario } = useForm(initialState)

  return (
    <div>
      <h3>Formularios</h3>
      <input
        type='text'
        className='form-control'
        placeholder='Email'
        value={email}
        name='email'
        onChange={({ target }) => { onChange(target.value, 'email') }}
      />
      <input
        type='password'
        className='form-control mt-2 mb-2'
        placeholder='Password'
        value={password}
        name='password'
        onChange={({ target }) => { onChange(target.value, 'password') }}
      />

      <code>
        <pre>
          {JSON.stringify(formulario, null, 2)}
        </pre>
      </code>


    </div>
  )
}
