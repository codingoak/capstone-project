import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import arrowLeftIcon from '../images/arrow-left.svg';

export default function Detail({ savedIssue }) {
  return (
    <Wrapper>
      <Navlink to="/">
        <img src={arrowLeftIcon} alt="back" width="38" height="38" />
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
