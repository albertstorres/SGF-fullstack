import './styles.css';
import Logo from '../../assets/logo.svg';
import api from '../../services/api';
import { FormEvent, useState } from 'react';


function Login() {
    const [username, setUsername] = useState('');
    const [senha, setSenha] = useState('');

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        try {
            if (!username || !senha) {
                throw new Error('Email e senha são obrigatórios.');
            }

            const res = await api.post('/login', {
                username,
                senha
            });

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='container container-login'>
            <div className='login'>
                <img src={Logo} alt='logo' />
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='usuario' value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <input type='password' placeholder='senha' value={senha} onChange={(e) => setSenha(e.target.value)} required />

                    <button className='btn-yellow'>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;