import styled from 'styled-components';

export const Widget = styled.div`
margin: 24px auto;
background-color: ${({ theme }) => theme.colors.mainBg};
border-radius: 4px;
overflow: hidden;
box-shadow: 1px 2px 2px ${({ theme }) => theme.colors.mainBg}, -2px 2px 20px ${({ theme }) => theme.colors.mainBg};

h1, h2, h3 {
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 0;
}

p {
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
}
`;

Widget.Header = styled.header`
display: flex;
justify-content: flex-start;
align-items: center;
padding: 18px 32px;
background-color: ${({ theme }) => theme.colors.primary};

* {
  margin: 0;
}
`;

Widget.Content = styled.div`
padding: 24px 32px 32px 32px;
& > *:first-child {
  margin-top: 0;
}
& > *:last-child {
  margin-bottom: 0;
}
ul {
  list-style: none;
  padding: 0;
}
`;