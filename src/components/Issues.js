import styled from 'styled-components/macro';
import Button from './Button';
import pin from '../images/pin.svg';
import pinFill from '../images/pin-fill.svg';

export default function Issues({ issues, togglePin }) {
  return (
    <>
      {issues.map(issue => {
        const isPinned = issues.find(
          issueId => issueId.id === issue.id
        ).clicked;

        return (
          <Wrapper key={issue.id} title={issue.title} state={issue.state}>
            <IssueTitle>{issue.title}</IssueTitle>
            <IssueState>{issue.state}</IssueState>
            <Button onClick={() => handleClick(issue.id)}>
              {
                <img
                  id={issue.id}
                  src={isPinned ? pinFill : pin}
                  alt="pin"
                  width="16"
                  heigth="16"
                />
              }
            </Button>
          </Wrapper>
        );
      })}
    </>
  );

  function handleClick(buttonId) {
    togglePin(buttonId);
  }
}

const Wrapper = styled.section`
  margin-left: 10px;
  margin-right: 10px;
  display: grid;
  align-items: center;
  grid-template-columns: 10px 1fr 60px 60px 10px;
  grid-template-rows: 60px;

  :nth-of-type(2n) {
    background-color: #d8e4eb;
    border-radius: 5px;
  }
`;

const IssueTitle = styled.p`
  grid-column: 2/3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 65vw;
`;

const IssueState = styled.p`
  grid-column: 3;
`;
