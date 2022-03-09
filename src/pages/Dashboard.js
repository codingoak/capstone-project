import styled from 'styled-components/macro';
import LoadingAnimation from '../components/LoadingAnimation';
import IssueHeading from '../components/IssueHeading';
import Issues from '../components/Issues';

export default function Dashboard({
  issues,
  issueIds,
  loading,
  error,
  togglePin,
}) {
  return (
    <>
      {/* Loading state */}
      {loading && <LoadingState>{LoadingAnimation()}</LoadingState>}
      {/* State after successful fetch */}
      {issues && (
        <>
          <IssueHeading />
          <Issues issues={issues} issueIds={issueIds} togglePin={togglePin} />
        </>
      )}
      {/* Error state */}
      {error && (
        <ErrorState>
          Oops, something went wrong. <br />
          Please try again!
        </ErrorState>
      )}
    </>
  );
}

const LoadingState = styled.p`
  margin: 100px;
  text-align: center;
  grid-column: 1/-1;
`;

const ErrorState = styled.p`
  margin: 100px;
  text-align: center;
  grid-column: 1/-1;
  font-size: 16px;
  color: crimson;
`;
