import { useNavigate } from 'react-router-dom';
import styled from 'styled-components/macro';

import { ButtonSecondary, ButtonPrimary } from './Button';
import useStore, { useMyIssues } from '../hooks/useStore';

export default function RemoveDialog({ id }) {
  const myIssues = useMyIssues(state => state.myIssues);
  const navigate = useNavigate();
  const setMyIssues = useMyIssues(state => state.setMyIssues);
  const setShowRemoveDialog = useStore(state => state.setShowRemoveDialog);

  return (
    <Wrapper>
      <ButtonPrimary
        children={'CANCEL'}
        onClick={() => {
          setShowRemoveDialog(false);
        }}
      />
      <ButtonSecondary
        children={'REMOVE'}
        onClick={() => {
          removeIssue(id);
        }}
      />
    </Wrapper>
  );

  function removeIssue(id) {
    navigate('/myissues');
    setMyIssues(myIssues.filter(myIssue => myIssue.id !== id));
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
