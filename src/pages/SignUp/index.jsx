import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';

import { api } from '../../services';

import { Button } from '../../components/Button';
import { Input } from "../../components/Input";

import 'react-toastify/dist/ReactToastify.css'
import { Container, Form, Background } from "./styles";

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  function handleSignUp() {
    if(!name || !email || !password) {
      return toast.error('Preencha todos os campos')
    }

    api.post("/users", {name, email, password})
    .then(() => {
      toast.success('Usuário cadastrado com sucesso!')
      navigate('/');
    })
    .catch(error => {
      if(error.response) {
        toast.error(error.response.data.message)
      } else {
        toast.error('Não foi possível realizar o cadastro.')
      }
    });
  }

  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input 
          icon={FiUser}
          placeholder="Nome"
          type="text"
          onChange={e => setName(e.target.value)}
        />

        <Input 
          icon={FiMail}
          placeholder="E-mail"
          type="text"
          onChange={e => setEmail(e.target.value)}
        />

        <Input 
          icon={FiLock}
          placeholder="Senha"
          type="password"
          onChange={e => setPassword(e.target.value)}
        />

        <Button title="Cadastrar" onClick={handleSignUp} />

        <Link to="/">
          <FiArrowLeft size={20} />
          Voltar para o login
        </Link>
      </Form>

      <Background />
    </Container>
  );
}