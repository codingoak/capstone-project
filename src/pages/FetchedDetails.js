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
      <Back>
        <BackArrow to="/dashboard" />
      </Back>
      <Wrapper>
        <Top>
          <ProfilHead>
            <img
              src={comparedIssue.user.avatar_url}
              alt={`Avatar of ${comparedIssue.user.login}`}
              width="110"
              height="110"
            />
            <div>
              <h2>{comparedIssue.user.login}</h2>
              <h3>ID: {comparedIssue.user.id}</h3>
            </div>
          </ProfilHead>

          <ProfileBody>
            <dt>Issue ID:</dt>
            <dd>{comparedIssue.id}</dd>
            <dt>State:</dt>
            <dd>{comparedIssue.state}</dd>
            <dt>Comments:</dt>
            <dd>
              {comparedIssue.comments === 0
                ? 'No comments'
                : comparedIssue.comments}
            </dd>
          </ProfileBody>
        </Top>

        <Bottom>
          <Title>
            <dt>Title:</dt>
            <dd>{comparedIssue.title}</dd>
          </Title>

          <Bio>
            <dt>Body:</dt>
            <dd>{comparedIssue.body}</dd>
          </Bio>

          <More>
            {comparedIssue.milestone ? (
              <dl>
                <dt>Milestone:</dt>
                <dd>{comparedIssue.milestone}</dd>
              </dl>
            ) : null}
            {comparedIssue.labels.length > 0 ? (
              <dl>
                <dt>Labels:</dt>
                {comparedIssue.labels.map(label => (
                  <dd key={comparedIssue + label.name}>{label.name}</dd>
                ))}
              </dl>
            ) : null}
            <dl>
              <dt>Created at:</dt>
              <dd>{comparedIssue.created_at}</dd>
            </dl>
            <dl>
              <dt>Updated at:</dt>
              <dd>{comparedIssue.updated_at}</dd>
            </dl>
            <a href={comparedIssue.html_url} target="_blank" rel="noreferrer">
              Link to Issue Nr: {comparedIssue.number} on GitHub
            </a>
          </More>
        </Bottom>
      </Wrapper>
    </>
  );
}

const Back = styled.div`
  margin: 20px 30px;
`;

const Bio = styled.dl`
  background-color: var(--bg-color-light);
  border-radius: 10px;
  padding: 15px;
`;

const Bottom = styled.section`
  margin: 20px;

  dd {
    margin: 0px;
  }

  dt {
    font-weight: bold;
  }
`;

const Title = styled.dl`
  margin: 0 15px;
`;

const ProfileBody = styled.dl`
  border-left: 1px solid var(--border-color-dark);
  margin-bottom: 0;
  padding: 1px 15px;

  dd {
    margin-left: 5px;
  }

  dt {
    font-weight: bold;
    margin: 12px 0;
    margin-bottom: 0px;
  }
`;

const ProfilHead = styled.section`
  padding: 1px 20px;

  h2,
  h3 {
    font-size: 1.3rem;
    margin: 0;
    padding: 0;
  }

  h3 {
    font-size: 1rem;
    font-weight: normal;
  }

  img {
    border-radius: 50%;
    margin-top: 15px;
  }

  p {
    margin: 5px 0;
  }
`;

const More = styled.section`
  margin-left: 15px; ;
`;

const Top = styled.section`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.main`
  word-break: break-all;
`;
