/* eslint-disable linebreak-style */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';

import BeatLoader from 'react-spinners/BeatLoader';

import db from '../db.json';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import QuizContainer from '../src/components/QuizContainer';
import QuizWidget from '../src/components/QuizWidget';
import Widget from '../src/components/Widget';
import Button from '../src/components/Button';

const css = {
  display: 'block',
  width: '100%',
  margin: '50px auto',
  paddingLeft: '43%',
};

const QUIZSTATE = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

function QuizPage() {
  const { questions } = db;
  const max = questions.length;
  const [question, setQuestion] = useState(0);
  const [screenState, setScreenState] = useState(QUIZSTATE.LOADING);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setScreenState(QUIZSTATE.QUIZ);
      setLoading(false);
    }, 1000);
  }, []);

  const handleTimer = () => {
    setScreenState(QUIZSTATE.LOADING);
    setLoading(true);
    setTimeout(() => {
      setScreenState(QUIZSTATE.QUIZ);
      setLoading(false);
    }, 1000);
  };

  const handleClick = () => {
    const position = question + 1;
    if (questions[question].answer) handleTimer();
    if (position < max) {
      setQuestion(position);
    } else {
      setScreenState(QUIZSTATE.RESULT);
    }
  };

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        {
          screenState === 'QUIZ'
          && (
          <div>
            <QuizWidget
              question={questions[question]}
              position={question + 1}
              maxLenght={questions.length}
              onClick={handleClick}
            />
            <Button
              onClick={handleClick}
            >
              Confirmar
            </Button>
          </div>
          )
        }
        {
        screenState === 'LOADING' && (
          <Widget>
            <div style={css}>
              <BeatLoader
                color={db.theme.colors.primary}
                loading={loading}
                size={15}
              />
            </div>
          </Widget>
        )
        }
        {
          screenState === 'RESULT' && (
            <Widget>
              <Widget.Header>
                <h1>
                  {`Você acertou ${max} de ${max} questões.`}
                </h1>
              </Widget.Header>
            </Widget>
          )
        }
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/ERAjeje/Imersao-Alura-Nextjs-Quiz-Rupauls-Drag-Race" />
    </QuizBackground>
  );
}

export default QuizPage;
