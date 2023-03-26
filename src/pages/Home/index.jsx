import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services';

import { FiPlus } from 'react-icons/fi';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Note } from '../../components/Note';

import { Container, Section, Content } from './styles';

export function Home() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState('');

  const navigate = useNavigate();

  function handleNavigateNewNote() {
    navigate("/new");
  }

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/movie_notes?title=${search}&tags`);
      setNotes(response.data);
    }

    fetchNotes();

  }, [search]);

  return (
    <Container>
      <Header />

      <Section>
        <div>
          <h2>Meus filmes</h2>

          <Button icon={FiPlus} title="Adicionar filme" onClick={handleNavigateNewNote} />
        </div>

        <Content>
          {
            notes.map(note => (
              <Note 
                key={note.id}
                data={note} 
                onClick={() => handleDetails(note.id)}
              />
            ))
          }
        </Content>
      </Section>
    </Container>
  );
}