import styled from 'styled-components/macro';

export default function Footer() {
  return (
    <FooterText>
      <small>by Daniel Eicher</small>
    </FooterText>
  );
}

const FooterText = styled.footer`
  margin-top: 3rem;
  color: gray;
  text-align: center;
`;
