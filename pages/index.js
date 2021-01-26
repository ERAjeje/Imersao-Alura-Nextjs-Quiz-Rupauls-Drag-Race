import styled from 'styled-components';
import db from '../db.json';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import { QuizBackground } from '../src/components/QuizBackground';
import { Widget } from '../src/components/Widget';

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

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

const Separator = styled.div`
  margin-top: 245px;
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Este é um quiz sobre o realit show Rupaul's Drag Race</p>
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
      <GitHubCorner projectUrl='' />
    </QuizBackground>
  );
}
