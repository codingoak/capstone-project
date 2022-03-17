import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

export default function MyIssueDetails({ myIssue }) {
  return (
    <Wrapper>
      <NavLink to="/myissues">
        <svg
          width="38"
          height="38"
          fill="var(--bg-color-action)"
          viewBox="0 0 16 16"
          title="back"
        >
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
        </svg>
      </NavLink>
      <dl>
        <DT>Issue ID:</DT>
        <DD>{myIssue.id}</DD>
        <DT>User:</DT>
        <DD>{myIssue.user}</DD>
        <DT>Title:</DT>
        <DD>{myIssue.title}</DD>
        <DT>Body:</DT>
        <DD>{myIssue.body}</DD>
        <DT>Created at:</DT>
        <DD>{myIssue.created_at}</DD>
        <DT>State:</DT>
        <DD>{myIssue.state}</DD>
        <DT>Milestone:</DT>
        <DD>{myIssue.milestone}</DD>
        <DT>Labels:</DT>
        <DD>{myIssue.labels}</DD>
      </dl>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  padding: 0 10px;
`;

const DT = styled.dt`
  margin-top: 10px;
  font-weight: bold;
`;
const DD = styled.dd`
  margin: 0 15px;
`;
