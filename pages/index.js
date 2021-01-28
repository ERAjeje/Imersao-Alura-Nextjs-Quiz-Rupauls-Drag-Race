/* eslint-disable linebreak-style */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useState } from 'react';
import db from '../db.json';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import Widget from '../src/components/Widget';
import Button from '../src/components/Button';
import Input from '../src/components/Input';
import QuizLogo from '../src/components/QuizLogo';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 10px
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    router.push({ pathname: '/quiz', query: { name }, as: '/quiz' });
  }

  function handleChange({ target }) {
    const newName = target.value;
    setName(newName);
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Vamos testar seus conhecimentos sobre o reality Rupaul's Drag Race</p>
            <form onSubmit={handleSubmit}>
              <Input
                name="Nome do usuário"
                placeholder="Digite o seu Nome"
                onChange={handleChange}
              />
              <Button
                disabled={name.length === 0}
              >
                Jogar
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h2>Quizes da Galera</h2>
            <p>Este é um quiz sobre o realit show Rupaul's Drag Race</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/ERAjeje/Imersao-Alura-Nextjs-Quiz-Rupauls-Drag-Race" />
    </QuizBackground>
  );
}
