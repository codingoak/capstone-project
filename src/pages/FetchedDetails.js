import { useEffect } from 'react';

import styled from 'styled-components/macro';

import BackArrow from '../components/BackArrow';
import HeadingMain from '../components/HeadingMain';

export default function Detail({ comparedIssue }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeadingMain title="DETAILS" />
      <Wrapper>
        <BackArrow to="/dashboard" />

        <FlexContainer>
          <DL>
            <DT>User ID:</DT>
            <DD>{comparedIssue.user.id}</DD>
            <DT>User:</DT>
            <DD>{comparedIssue.user.login}</DD>
          </DL>
          <Avatar
            src={comparedIssue.user.avatar_url}
            alt={`Avatar of ${comparedIssue.user.login}`}
            width="90"
            height="90"
          />
        </FlexContainer>
        <DL>
          <DT>Number:</DT>
          <DD>{comparedIssue.number}</DD>
          <DT>Issue ID:</DT>
          <DD>{comparedIssue.id}</DD>
          <DT>Title:</DT>
          <DD>{comparedIssue.title}</DD>
          <DT>Body:</DT>
          <DD>{comparedIssue.body}</DD>
        </DL>
        <FlexContainer>
          <dl>
            <DT>Created at:</DT>
            <DD>{comparedIssue.created_at}</DD>
          </dl>
          <dl>
            <DT>Updated at:</DT>
            <DD>{comparedIssue.updated_at}</DD>
          </dl>
        </FlexContainer>
        <DL>
          <DT>State:</DT>
          <DD>{comparedIssue.state}</DD>
          <DT>Milestone:</DT>
          <DD>{comparedIssue.milestone}</DD>
          <DT>Labels:</DT>
          {comparedIssue.labels?.map(label => (
            <DD key={comparedIssue + label.name}>{label.name}</DD>
          ))}
          <DT>Comments:</DT>
          <DD>
            {comparedIssue.comments === 0
              ? 'No comments available'
              : comparedIssue.comments}
          </DD>
          <DT>URL:</DT>
          <DD>
            <a href={comparedIssue.html_url} target="_blank" rel="noreferrer">
              {comparedIssue.html_url}
            </a>
          </DD>
        </DL>
      </Wrapper>
    </>
  );
}

const Avatar = styled.img`
  border-radius: 5px;
  margin-right: 10px;
  margin-top: 10px;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DD = styled.dd`
  margin: 0 10px;
`;

const DL = styled.dl`
  margin: 0;
`;

const DT = styled.dt`
  font-weight: bold;
  margin-top: 10px;
`;

const Wrapper = styled.main`
  padding: 0 10px;
  word-break: break-all;
`;
