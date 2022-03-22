import styled from 'styled-components/macro';
import { ButtonPrimary } from './Button';
import { ButtonSecondary } from './Button';

export default function RemoveDialog({
  issueId,
  setShowRemoveDialog,
  handleRemoveIssue,
}) {
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
}

const Wrapper = styled.div`
  display: inherit;
  flex-wrap: wrap;
`;
