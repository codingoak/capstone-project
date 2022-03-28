import { useNavigate } from 'react-router-dom';
import styled from 'styled-components/macro';

import { ButtonSecondary, ButtonPrimary } from './Button';

export default function RemoveDialog({
  issueId,
  handleShowRemoveDialog,
  handleRemoveIssue,
}) {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <ButtonPrimary
        children={'CANCEL'}
        onClick={() => {
          handleShowRemoveDialog();
        }}
      />
      <ButtonSecondary
        children={'REMOVE'}
        onClick={() => {
          removeIssue(issueId);
        }}
      />
    </Wrapper>
  );

  function removeIssue(id) {
    handleRemoveIssue(id);
    navigate('/myissues');
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
