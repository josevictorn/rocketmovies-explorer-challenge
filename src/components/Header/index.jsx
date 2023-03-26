import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import { Input } from '../Input';
import { Container, Profile } from './styles';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

export function Header() {
  const { user, signOut } = useAuth();

  const navigate = useNavigate();

  function handleSignOut() {
    signOut();
    navigate("/");
  }

  return (
    <Container>
      <h1>RocketMovies</h1>

      <Input placeholder="Pesquisar pelo título" />

      <Profile>
        <div>
          <strong>{user.name}</strong>
          <button type='button' onClick={handleSignOut} >sair</button>
        </div>
        
        <Link to="/profile">
          <img src={avatarPlaceholder} alt="Imagem de José Victor" />
        </Link>
      </Profile>
    </Container>
  );
}