/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React from 'react';

import Widget from '../Widget';

function QuizWidget(props) {
  const {
    question, position, maxLenght,
  } = props;
  return (
    <Widget>
      <Widget.Header>
        <h1>
          {`Pergunta ${position} de ${maxLenght}`}
        </h1>
      </Widget.Header>
      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>
      </Widget.Content>
      {
        question.alternatives.map((alternative, index) => {
          const alternativeId = `alternative__${index}`;
          return (
            <Widget.Topic
              as="label"
              htmlFor={alternativeId}
            >
              <input
                // style={{ display: 'none' }}
                id={alternativeId}
                name={position}
                type="radio"
              />
              {alternative}
            </Widget.Topic>
          );
        })
      }
    </Widget>
  );
}

export default QuizWidget;
