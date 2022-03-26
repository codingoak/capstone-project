import { useEffect } from 'react';

import styled from 'styled-components/macro';

import BackArrow from '../components/BackArrow';
import HeadingMain from '../components/HeadingMain';

export default function Detail({ fetchedIssue }) {
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
            <DD>{fetchedIssue.user.id}</DD>
            <DT>User:</DT>
            <DD>{fetchedIssue.user.login}</DD>
          </DL>
          <Avatar
            src={fetchedIssue.user.avatar_url}
            alt={`Avatar of ${fetchedIssue.user.login}`}
            width="90"
            height="90"
          />
        </FlexContainer>
        <DL>
          <DT>Number:</DT>
          <DD>{fetchedIssue.number}</DD>
          <DT>Issue ID:</DT>
          <DD>{fetchedIssue.id}</DD>
          <DT>Title:</DT>
          <DD>{fetchedIssue.title}</DD>
          <DT>Body:</DT>
          <DD>{fetchedIssue.body}</DD>
        </DL>
        <FlexContainer>
          <dl>
            <DT>Created at:</DT>
            <DD>{fetchedIssue.created_at}</DD>
          </dl>
          <dl>
            <DT>Updated at:</DT>
            <DD>{fetchedIssue.updated_at}</DD>
          </dl>
        </FlexContainer>
        <DL>
          <DT>State:</DT>
          <DD>{fetchedIssue.state}</DD>
          <DT>Milestone:</DT>
          <DD>{fetchedIssue.milestone}</DD>
          <DT>Labels:</DT>
          {fetchedIssue.labels?.map(label => (
            <DD key={fetchedIssue + label.name}>{label.name}</DD>
          ))}
          <DT>Comments:</DT>
          <DD>
            {fetchedIssue.comments === 0
              ? 'No comments available'
              : fetchedIssue.comments}
          </DD>
          <DT>URL:</DT>
          <DD>
            <a href={fetchedIssue.html_url} target="_blank" rel="noreferrer">
              {fetchedIssue.html_url}
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
  border-radius: 5px;
  margin-right: 10px;
  margin-top: 10px;
`;

const DL = styled.dl`
  margin: 0;
`;

const DT = styled.dt`
  font-weight: bold;
  margin-top: 10px;
`;
const DD = styled.dd`
  margin: 0 10px;
`;
