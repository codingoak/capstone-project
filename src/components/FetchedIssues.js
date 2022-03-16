import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import pin from '../images/pin.svg';
import pinFill from '../images/pin-fill.svg';

export default function Issues({ savedIssues, togglePin }) {
  return (
    <>
      <HeadingWrapper>
        <HeadingTitle>Title</HeadingTitle>
        <HeadingState>State</HeadingState>
      </HeadingWrapper>

      {savedIssues.map(savedIssue => {
        const isPinned = savedIssues.find(
          issueId => issueId.id === savedIssue.id
        ).isPinned;

        return (
          <Wrapper
            key={savedIssue.id}
            title={savedIssue.title}
            state={savedIssue.state}
          >
            <Link to={`/${savedIssue.id}`}>
              <IssueTitle>{savedIssue.title}</IssueTitle>
              <IssueState>{savedIssue.state}</IssueState>
            </Link>
            <PinButton
              onClick={() => {
                togglePin(savedIssue.id, savedIssues);
              }}
            >
              <img
                src={isPinned ? pinFill : pin}
                alt="pin"
                width="16"
                heigth="16"
              />
            </PinButton>
          </Wrapper>
        );
      })}
    </>
  );
}

const HeadingWrapper = styled.section`
  margin-bottom: -15px;
  display: grid;
  grid-template-columns: 10px 1fr 52px 32px 10px 10px;
`;

const HeadingTitle = styled.h2`
  grid-column: 2/3;
  letter-spacing: 2px;
  padding-left: 10px;
  border-bottom: 1px solid var(--border-color);
`;

const HeadingState = styled.h2`
  grid-column: 3/6;
  letter-spacing: 2px;
  border-bottom: 1px solid var(--border-color);
`;

const Wrapper = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  display: grid;
  align-items: center;
  grid-template-columns: 10px 1fr 52px 42px;
  grid-template-rows: 60px;

  :nth-of-type(2n) {
    background-color: var(--bg-color-light);
    border-radius: 5px;
  }
`;

const Link = styled(NavLink)`
  display: inherit;
  align-items: center;
  grid-column: 1 /4;
  grid-template-columns: 10px 1fr 52px;
  grid-template-rows: 60px;
  &:link,
  &:visited,
  &:hover,
  &:active {
    text-decoration: none;
    color: inherit;
  }
`;

const IssueTitle = styled.p`
  grid-column: 2/3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const IssueState = styled.div`
  grid-column: 3;
`;

const PinButton = styled.button`
  grid-column: 4/6;
  justify-self: end;
  width: 42px;
  height: 42px;
  background: none;
  border: none;
  border-radius: 50%;
`;
