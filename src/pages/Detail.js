import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

export default function Detail({ savedIssue }) {
  return (
    <Wrapper>
      <Navlink to="/">
        <svg
          width="38"
          height="38"
          fill="#0085dc"
          stroke="#fff"
          viewBox="0 0 16 16"
          title="back"
        >
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
        </svg>
      </Navlink>
      <dl>
        <dt>Number:</dt>
        <dd>{savedIssue.number}</dd>
        <dt>Issue ID:</dt>
        <dd>{savedIssue.id}</dd>
        <dt>User:</dt>
        <dd>{savedIssue.user.login}</dd>
        <dt>Avatar:</dt>
        <dd>
          <img
            src={savedIssue.user.avatar_url}
            alt="avatar"
            width="100"
            height="100"
          />
        </dd>
        <dt>Title:</dt>
        <dd>{savedIssue.title}</dd>
        <dt>Body:</dt>
        <dd>{savedIssue.body}</dd>
        <dt>Created at:</dt>
        <dd>{savedIssue.created_at}</dd>
        <dt>Updated at:</dt>
        <dd>{savedIssue.updated_at}</dd>
        <dt>State:</dt>
        <dd>{savedIssue.state}</dd>
        <dt>Milestone:</dt>
        <dd>{savedIssue.milestone}</dd>
        <dt>Labels:</dt>
        {savedIssue.labels?.map(label => (
          <dd key={savedIssue.id + savedIssue.created_at}>{label.name}</dd>
        ))}
        <dt>Comments:</dt>
        <dd>
          {savedIssue.comments === 0
            ? 'No comments available'
            : savedIssue.comments}
        </dd>
      </dl>
      <dt>URL:</dt>
      <dd>
        <a href={savedIssue.html_url} target="_blank" rel="noreferrer">
          {savedIssue.html_url}
        </a>
      </dd>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  padding: 0 10px;
`;

const Navlink = styled(NavLink)`
  color: blue;
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
`;
