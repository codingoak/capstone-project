import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { ButtonPrimarySmall, ButtonSecondary } from '../components/Button';
import RemoveDialog from '../components/RemoveDialog';

export default function MyIssueDetails({
  myIssue,
  avatar,
  myIssues,
  setMyIssues,
}) {
  const [showRemoveDialog, setShowRemoveDialog] = useState(false);
  const [editTitle, setEditTitle] = useState(false);
  const [editBody, setEditBody] = useState(false);
  const [editState, setEditState] = useState(false);
  const [editMilestone, setEditMilestone] = useState(false);
  const [editLabels, setEditLabels] = useState(false);

  return (
    <Wrapper>
      <Navlink to="/myissues" aria-label="back">
        <svg
          width="38"
          height="38"
          fill="var(--bg-color-primary)"
          viewBox="0 0 16 16"
        >
          <title>Back</title>
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
        </svg>
      </Navlink>
      <Message>
        All fields with an asterisk* can be changed. Click on the values to
        edit.
      </Message>

      <dl>
        <FlexContainer>
          <div>
            <DT>Issue ID:</DT>
            <DD>{myIssue.id}</DD>

            <DT>User:</DT>
            <DD>{myIssue.user}</DD>
          </div>
          <div>
            <DD>
              <Avatar src={avatar} alt="avatar" width="100" height="100" />
            </DD>
          </div>
        </FlexContainer>

        <DT>Title*:</DT>
        <FlexContainer>
          {editTitle ? (
            <>
              <input
                type="text"
                defaultValue={myIssue.title}
                onChange={e => (myIssue.title = e.target.value)}
              />
              <ButtonPrimarySmall
                onClick={() => setEditTitle(false)}
                children={'EDIT'}
              />
            </>
          ) : (
            <>
              <DD onClick={() => setEditTitle(true)}>{myIssue.title}</DD>
            </>
          )}
        </FlexContainer>

        <DT>Body*:</DT>
        <FlexContainer>
          {editBody ? (
            <>
              <input
                type="text"
                defaultValue={myIssue.body}
                onChange={e => (myIssue.body = e.target.value)}
              />
              <ButtonPrimarySmall
                onClick={() => setEditBody(false)}
                children={'EDIT'}
              />
            </>
          ) : (
            <>
              <DD onClick={() => setEditBody(true)}>{myIssue.body}</DD>
            </>
          )}
        </FlexContainer>

        <DT>Created at:</DT>
        <DD>{myIssue.created_at}</DD>

        <DT>State:</DT>
        <FlexContainer>
          {editState ? (
            <>
              <input
                type="text"
                defaultValue={myIssue.state}
                onChange={e => (myIssue.state = e.target.value)}
              />
              <ButtonPrimarySmall
                onClick={() => setEditState(false)}
                children={'EDIT'}
              />
            </>
          ) : (
            <>
              <DD onClick={() => setEditState(true)}>{myIssue.state}</DD>
            </>
          )}
        </FlexContainer>

        <DT>Milestone*:</DT>
        <FlexContainer>
          {editMilestone ? (
            <>
              <input
                type="text"
                defaultValue={myIssue.milestone}
                onChange={e => (myIssue.milestone = e.target.value)}
              />
              <ButtonPrimarySmall
                onClick={() => setEditMilestone(false)}
                children={'EDIT'}
              />
            </>
          ) : (
            <>
              <DD onClick={() => setEditMilestone(true)}>
                {myIssue.milestone}
              </DD>
            </>
          )}
        </FlexContainer>

        <>
          {editLabels ? (
            <>
              <DT>Labels (separated by comma):</DT>
              <FlexContainer>
                <input
                  type="text"
                  defaultValue={myIssue.labels}
                  onChange={e =>
                    (myIssue.labels = e.target.value
                      .split(',')
                      .map(label => label.trim())
                      .filter(tag => tag.length > 0))
                  }
                />
                <ButtonPrimarySmall
                  onClick={() => setEditLabels(false)}
                  children={'EDIT'}
                />
              </FlexContainer>
            </>
          ) : (
            <>
              <DT>Labels*:</DT>
              {myIssue.labels?.map((label, index) => (
                <DD
                  onClick={() => setEditLabels(true)}
                  key={index + myIssue.id}
                >
                  {label}
                </DD>
              ))}
            </>
          )}
        </>
      </dl>

      <ButtonContainer>
        {!showRemoveDialog && (
          <>
            <ButtonSecondary
              children={'REMOVE'}
              onClick={() => setShowRemoveDialog(true)}
            />
          </>
        )}
        {showRemoveDialog && (
          <RemoveDialog
            issueId={myIssue.id}
            setShowRemoveDialog={setShowRemoveDialog}
            myIssues={myIssues}
            setMyIssues={setMyIssues}
          />
        )}
      </ButtonContainer>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  margin: 0 10px;
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

const Message = styled.p`
  font-size: 0.9rem;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Avatar = styled.img`
  border-radius: 5px;
`;

const DT = styled.dt`
  margin-top: 10px;
  font-weight: bold;
`;
const DD = styled.dd`
  margin: 0 15px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
