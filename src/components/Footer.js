import styled from 'styled-components/macro';

export default function Footer() {
  return (
    <FooterText>
      <small>by Daniel Eicher</small>
    </FooterText>
  );
}

const FooterText = styled.footer`
  color: gray;
  text-align: center;
`;
