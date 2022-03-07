import styled from 'styled-components/macro';

export default function Footer() {
  return (
    <FooterText>
      <small>by Daniel Eicher</small>
    </FooterText>
  );
}

const FooterText = styled.footer`
  grid-row: -1;
  grid-column: 2;

  margin-top: 20px;
  color: gray;
  text-align: center;
`;
