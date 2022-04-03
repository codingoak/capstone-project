import styled from 'styled-components/macro';

import HeadingIssues from '../components/HeadingIssues';
import HeadingMain from '../components/HeadingMain';
import Issues from '../components/Issues';
import { useMyIssues } from '../hooks/useStore';

export default function MyIssues() {
  const myIssues = useMyIssues(state => state.myIssues);

  return (
    <>
      <HeadingMain title="MY ISSUES" />
      <main>
        {myIssues.length > 0 ? (
          <HeadingIssues />
        ) : (
          <EmptyState>
            <i>Create an issue with the create form.</i>
          </EmptyState>
        )}
        <Issues issues={myIssues} />
      </main>
    </>
  );
}

const EmptyState = styled.p`
  display: grid;
  margin-top: 75px;
  place-items: center;
`;
