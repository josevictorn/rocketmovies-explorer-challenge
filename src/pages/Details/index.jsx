import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FiArrowLeft, FiClock } from 'react-icons/fi'

import { api } from '../../services';

import { useAuth } from '../../hooks/auth';

import { ButtonText } from '../../components/ButtonText';
import { Header } from '../../components/Header';

import { Container, Section } from './styles';
import THEMES from '../../styles/theme';
import { Tag } from '../../components/Tag';

export function Details() {
  const [data, setData] = useState(null);

  const { user } = useAuth();

  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/movie_notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, []);
  
  return(
    <Container>
      <Header />
      
      {
        data &&
        <Section>
          <ButtonText icon={FiArrowLeft} title="Voltar" onClick={handleBack}/>

          <div className="titleAndRating">
            <h2>{data.title}</h2>
          </div>

          <div className="authorAndCreatedAt">
            <div className="author">
              <img src="https://github.com/josevictorn.png" alt="Imagem de José Victor" />
              <span>Por {user.name} </span>
            </div>

            <div className="createdAt">
              <FiClock size={16} color={THEMES.COLORS.SALMON}/>
              <span>{data.created_at}</span>
            </div>
          </div>

          <div className="tags">
            {data.tags.map(tag => (
              <Tag key={tag.id} title={tag.name}/>
            ))}
          </div>

          <p>{data.description}</p>
        </Section>
      }
    </Container>
  );
}