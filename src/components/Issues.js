import styled from 'styled-components/macro';
import pin from '../images/pin.svg';
import pinFill from '../images/pin-fill.svg';

export default function Issues({ issues, togglePin }) {
  return (
    <>
      <HeadingWrapper>
        <HeadingTitle>Title</HeadingTitle>
        <HeadingState>State</HeadingState>
      </HeadingWrapper>

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

const HeadingWrapper = styled.section`
  display: grid;
  grid-template-columns: 10px 1fr 60px 60px 10px 10px;
`;

const HeadingTitle = styled.h2`
  grid-column: 2/3;
  font-size: 18px;
  letter-spacing: 2px;
  padding-left: 10px;
  border-bottom: 1px solid #0b2b40;
`;

const HeadingState = styled.h2`
  grid-column: 3/6;
  font-size: 18px;
  letter-spacing: 2px;
  border-bottom: 1px solid #0b2b40;
`;

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

const Button = styled.button`
  grid-column: 4;
  text-align: center;
  width: 60px;
  height: 60px;
  background: none;
  border: none;
`;
