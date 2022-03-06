import styled from 'styled-components/macro';
import GetFetch from '../services/GetFetch.js';

function Dashboard() {
  return (
    <>
      <Heading>DASHBOARD</Heading>
      <ListHeading>
        <span>Title</span>
        <span>State</span>
      </ListHeading>

      <GetFetch />
      <Footer>
        <small>by Daniel Eicher</small>
      </Footer>
    </>
  );
}

export default Dashboard;

const Heading = styled.h1`
  display: grid;
  place-items: center;
  height: 44px;
  padding: 0;
  margin: 0;
  font-size: 24px;
  letter-spacing: 3px;
  color: #eee;
  background-color: #0b2b40;
`;

const ListHeading = styled.h2`
  display: flex;
  justify-content: space-between;
  font-size: 1px;
  padding: 0 10px;
  margin: 25px 10px -15px;
  font-size: 18px;
  letter-spacing: 2px;
  border-bottom: 1px solid #0b2b40;
`;

const Footer = styled.footer`
  margin-top: 3rem;
  color: gray;
  text-align: center;
`;
