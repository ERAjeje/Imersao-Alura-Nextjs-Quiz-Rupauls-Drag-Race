/* eslint-disable linebreak-style */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import db from '../db.json';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizContainer from '../src/components/QuizContainer';

function QuizPage() {
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

export default QuizPage;
