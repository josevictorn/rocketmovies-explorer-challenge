import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services';

import { FiArrowLeft } from 'react-icons/fi';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';

import { toast } from 'react-toastify';

import { Container, Form } from './styles';

export function New() {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState('');

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleNewNote() {
    if(!title) {
      toast.warning("Digite o título da nota.");
    }

    if(newTag) {
      toast.warning('Você preencheu o campo "Nova Tag", mas não clicou em adicionar.');
    }

    await api.post("/movie_notes", {
      title,
      description,
      rating,
      tags
    });

    toast.success("Nota criada com sucesso!");
    navigate("/");
  }

  return(
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <ButtonText icon={FiArrowLeft} title="Voltar" onClick={handleBack} />

            <h1>Novo filme</h1>
          </header>

          <div>
            <Input 
              type="text"
              placeholder="Título" 
              onChange={e => setTitle(e.target.value)}
            />

            <Input 
              type="number"
              placeholder="Sua nota (de 0 a 5)" 
              onChange={e => setRating(e.target.value)}
            />
          </div>

          <Textarea 
            placeholder="Observações" 
            onChange={e => setDescription(e.target.value)}
          />

          <h2>Marcadores</h2>

          <div className="markers">
            {
              tags.map((tag, index) => (
                <NoteItem
                  key={String(index)} 
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))
            }

            <NoteItem 
              isNew
              placeholder="Nova tag"
              value={newTag}
              onChange={e => setNewTag(e.target.value)}
              onClick={handleAddTag}
            />
          </div>

          <Button title="Salvar filme" onClick={handleNewNote} />
        </Form>
      </main>
    </Container>
  );
}