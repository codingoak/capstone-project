import { useEffect } from 'react';

import styled from 'styled-components/macro';

import BackArrow from '../components/BackArrow';
import HeadingMain from '../components/HeadingMain';

export default function Detail({ savedIssue }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeadingMain title="DETAILS" />
      <Wrapper>
        <BackArrow to="/" />

        <FlexContainer>
          <DL>
            <DT>User ID:</DT>
            <DD>{savedIssue.user.id}</DD>
            <DT>User:</DT>
            <DD>{savedIssue.user.login}</DD>
          </DL>
          <Avatar
            src={savedIssue.user.avatar_url}
            alt={`Avatar of ${savedIssue.user.login}`}
            width="90"
            height="90"
          />
        </FlexContainer>
        <DL>
          <DT>Number:</DT>
          <DD>{savedIssue.number}</DD>
          <DT>Issue ID:</DT>
          <DD>{savedIssue.id}</DD>
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

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Avatar = styled.img`
  margin-top: 10px;
  margin-right: 10px;
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
