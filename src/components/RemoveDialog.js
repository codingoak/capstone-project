import styled from 'styled-components/macro';
import { useNavigate } from 'react-router-dom';
import { ButtonPrimary } from './Button';
import { ButtonSecondary } from './Button';

export default function RemoveDialog({
  issueId,
  setShowRemoveDialog,
  myIssues,
  setMyIssues,
}) {
  const navigate = useNavigate();
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
          handleRemoveIssue(issueId);
        }}
      />
    </Wrapper>
  );

  function handleRemoveIssue(id) {
    setMyIssues(myIssues.filter(myIssue => myIssue.id !== id));
    navigate('/myissues');
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
