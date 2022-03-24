import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import Heading from '../components/Heading';

export default function Detail({ savedIssue }) {
  return (
    <>
      <header>
        <Heading title="DETAIL" />
      </header>
      <Wrapper>
        <Navlink to="/" aria-label="back">
          <svg
            role="img"
            aria-label="Back arrow"
            width="38"
            height="38"
            fill="var(--bg-color-primary)"
            viewBox="0 0 16 16"
          >
            <title>Back</title>
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
          </svg>
        </Navlink>
        <FlexContainer>
          <DL>
            <DT>Number:</DT>
            <DD>{savedIssue.number}</DD>
            <DT>Issue ID:</DT>
            <DD>{savedIssue.id}</DD>
            <DT>User:</DT>
            <DD>{savedIssue.user.login}</DD>
          </DL>
          <Avatar
            src={savedIssue.user.avatar_url}
            alt="avatar"
            width="90"
            height="90"
          />
        </FlexContainer>
        <DL>
          <DT>Title:</DT>
          <DD>{savedIssue.title}</DD>
          <DT>Body:</DT>
          <DD>{savedIssue.body}</DD>
        </DL>
        <FlexContainer>
          <dl>
            <DT>Created at:</DT>
            <DD>{savedIssue.created_at}</DD>
          </dl>
          <dl>
            <DT>Updated at:</DT>
            <DD>{savedIssue.updated_at}</DD>
          </dl>
        </FlexContainer>
        <DL>
          <DT>State:</DT>
          <DD>{savedIssue.state}</DD>
          <DT>Milestone:</DT>
          <DD>{savedIssue.milestone}</DD>
          <DT>Labels:</DT>
          {savedIssue.labels?.map(label => (
            <DD key={savedIssue + label.name}>{label.name}</DD>
          ))}
          <DT>Comments:</DT>
          <DD>
            {savedIssue.comments === 0
              ? 'No comments available'
              : savedIssue.comments}
          </DD>
          <DT>URL:</DT>
          <DD>
            <a href={savedIssue.html_url} target="_blank" rel="noreferrer">
              {savedIssue.html_url}
            </a>
          </DD>
        </DL>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.main`
  padding: 0 10px;
  word-break: break-all;
`;

const Navlink = styled(NavLink)`
  opacity: 0.8;

  :hover {
    cursor: pointer;
    opacity: 1;
    transition: all 0.15s;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Avatar = styled.img`
  border-radius: 5px;
`;

const DL = styled.dl`
  margin: 0;
`;

const DT = styled.dt`
  margin-top: 10px;
  font-weight: bold;
`;
const DD = styled.dd`
  margin: 0 10px;
`;
