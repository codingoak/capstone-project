import styled from 'styled-components/macro';
import Heading from '../components/Heading';
import LoadingAnimation from '../components/LoadingAnimation';
import ListHeading from '../components/ListHeading';
import IssueList from '../components/IssueList';
import Footer from '../components/Footer';

function Dashboard({ issues, loading, error }) {
  return (
    <>
      <Heading />
      {/* Loading state */}
      {loading && <LoadingState>{LoadingAnimation()}</LoadingState>}
      {/* State after successful fetch */}
      {issues && (
        <>
          <ListHeading />
          <IssueList issues={issues} />
        </>
      )}
      {/* Error state */}
      {error && (
        <ErrorState>
          Oops, something went wrong. <br />
          Please try again!
        </ErrorState>
      )}
      <Footer />
    </>
  );
}

export default Dashboard;

const LoadingState = styled.p`
  margin: 50px auto;
  grid-column: 1/-1;
`;

const ErrorState = styled.p`
  margin: 50px auto;
  grid-column: 1/-1;
  font-size: 16px;
  color: crimson;
`;
