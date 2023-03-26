import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi';

import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { Container, Form, Avatar } from "./styles";

export function Profile() {
  const { user, updateProfile } = useAuth();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();


  const navigate = useNavigate();
  
  function handleBack() {
    navigate(-1);
  }

  async function handleUpdateProfile() {
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld
    }

    const userUpdated = Object.assign(user, updated);

    await updateProfile({ user: userUpdated });
  }

  return(
    <Container>
      <header>
        <ButtonText icon={FiArrowLeft} title="Voltar" onClick={handleBack} />
      </header>

      <Form>
        <Avatar>
          <img src={avatarPlaceholder} alt="Imagem de José Victor" />

          <label htmlFor="avatar">
            <FiCamera />

            <input type="file" id="avatar" />
          </label>
        </Avatar>
        
        <Input 
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input 
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input 
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          onChange={e => setPasswordOld(e.target.value)}
        />

        <Input 
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          onChange={e => setPasswordNew(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdateProfile} />
      </Form>
    </Container>
  );
}