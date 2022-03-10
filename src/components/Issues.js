import styled from 'styled-components/macro';
import pin from '../images/pin.svg';
import pinFill from '../images/pin-fill.svg';

export default function Issues({ savedIssues, togglePin }) {
  return (
    <>
      <HeadingWrapper>
        <HeadingTitle>Title</HeadingTitle>
        <HeadingState>State</HeadingState>
      </HeadingWrapper>

      {savedIssues.map(issue => {
        const isPinned = savedIssues.find(
          issueId => issueId.id === issue.id
        ).clicked;

        return (
          <Wrapper key={issue.id} title={issue.title} state={issue.state}>
            <IssueTitle>{issue.title}</IssueTitle>
            <IssueState>{issue.state}</IssueState>
            <PinButton onClick={() => togglePin(issue.id)}>
              {
                <img
                  id={issue.id}
                  src={isPinned ? pinFill : pin}
                  alt="pin"
                  width="16"
                  heigth="16"
                />
              }
            </PinButton>
          </Wrapper>
        );
      })}
    </>
  );
}

const HeadingWrapper = styled.section`
  display: grid;
  grid-template-columns: 10px 1fr 52px 32px 10px 10px;
`;

const HeadingTitle = styled.h2`
  grid-column: 2/3;
  font-size: 18px;
  letter-spacing: 2px;
  padding-left: 10px;
  border-bottom: 1px solid var(--border-color);
`;

const HeadingState = styled.h2`
  grid-column: 3/6;
  font-size: 18px;
  letter-spacing: 2px;
  border-bottom: 1px solid var(--border-color);
`;

const Wrapper = styled.section`
  margin-left: 10px;
  margin-right: 10px;
  display: grid;
  align-items: center;
  grid-template-columns: 10px 1fr 52px 32px 10px;
  grid-template-rows: 60px;

  :nth-of-type(2n) {
    background-color: var(--bg-color-light);
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

const PinButton = styled.button`
  grid-column: 4;
  justify-self: end;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  border-radius: 50%;
`;
