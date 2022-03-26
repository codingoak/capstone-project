import { useEffect, useState } from 'react';

import styled from 'styled-components/macro';

import BackArrow from '../components/BackArrow';
import { ButtonPrimarySmall, ButtonSecondary } from '../components/Button';
import HeadingMain from '../components/HeadingMain';
import RemoveDialog from '../components/RemoveDialog';

export default function MyIssueDetails({
  myIssue,
  avatar,
  myIssues,
  handleRemoveIssue,
}) {
  const [showRemoveDialog, setShowRemoveDialog] = useState(false);
  const [editTitle, setEditTitle] = useState(false);
  const [editBody, setEditBody] = useState(false);
  const [editState, setEditState] = useState(false);
  const [editMilestone, setEditMilestone] = useState(false);
  const [editLabels, setEditLabels] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeadingMain title="DETAIL" />
      <Wrapper>
        <BackArrow to="/myissues" />
        <Message>
          All fields with an asterisk<Asterisk>*</Asterisk> can be changed.
          Click on the values to edit.
        </Message>

        <FlexContainer>
          <DL>
            <DT>Issue ID:</DT>
            <DD>{myIssue.id}</DD>
            <DT>User:</DT>
            <DD>{myIssue.user}</DD>
          </DL>
          <Avatar
            src={avatar}
            alt={`Avatar of ${myIssue.user}`}
            width="90"
            height="90"
          />
        </FlexContainer>
        <DL>
          <DT id="title">
            Title<Asterisk>*</Asterisk>:
          </DT>
          <FlexContainer>
            {editTitle ? (
              <>
                <StyledInput
                  aria-labelledby="title"
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
              <DD onClick={() => setEditTitle(true)}>{myIssue.title}</DD>
            )}
          </FlexContainer>

          <DT id="body">
            Body<Asterisk>*</Asterisk>:
          </DT>
          <FlexContainer>
            {editBody ? (
              <>
                <StyledInput
                  aria-labelledby="body"
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
              <DD onClick={() => setEditBody(true)}>{myIssue.body}</DD>
            )}
          </FlexContainer>

          <DT>Created at:</DT>
          <DD>{myIssue.created_at}</DD>

          <DT id="state">
            State<Asterisk>*</Asterisk>:
          </DT>
          <FlexContainer>
            {editState ? (
              <>
                <StyledInput
                  aria-labelledby="state"
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
              <DD onClick={() => setEditState(true)}>{myIssue.state}</DD>
            )}
          </FlexContainer>

          <DT id="milestone">
            Milestone<Asterisk>*</Asterisk>:
          </DT>
          <FlexContainer>
            {editMilestone ? (
              <>
                <StyledInput
                  aria-labelledby="milestone"
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
              <DD onClick={() => setEditMilestone(true)}>
                {myIssue.milestone}
              </DD>
            )}
          </FlexContainer>

          <>
            {editLabels ? (
              <>
                <DT id="labels">Labels (separated by comma)*:</DT>
                <FlexContainer>
                  <StyledInput
                    aria-labelledby="labels"
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
                <DT>
                  Labels<Asterisk>*</Asterisk>:
                </DT>
                {myIssue.labels.length > 0 ? (
                  myIssue.labels.map((label, index) => (
                    <DD
                      onClick={() => setEditLabels(true)}
                      key={index + myIssue.id}
                    >
                      {label}
                    </DD>
                  ))
                ) : (
                  <DD>no labels</DD>
                )}
              </>
            )}
          </>
        </DL>

        <ButtonContainer>
          {!showRemoveDialog && (
            <ButtonSecondary
              children={'REMOVE'}
              onClick={() => setShowRemoveDialog(true)}
            />
          )}
          {showRemoveDialog && (
            <RemoveDialog
              issueId={myIssue.id}
              myIssues={myIssues}
              handleRemoveIssue={handleRemoveIssue}
              handleShowRemoveDialog={handleShowRemoveDialog}
            />
          )}
        </ButtonContainer>
      </Wrapper>
    </>
  );

  function handleShowRemoveDialog() {
    setShowRemoveDialog(false);
  }
}

const Wrapper = styled.main`
  margin: 0 10px;
  word-break: break-all;
`;

const Message = styled.p`
  font-size: 0.9rem;
  font-style: italic;
  word-break: normal;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Asterisk = styled.span`
  color: crimson;
`;

const Avatar = styled.img`
  border-radius: 5px;
  border-radius: 5px;
  margin-right: 10px;
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

const StyledInput = styled.input`
  border-radius: 5px;
  border: 1px solid var(--border-color-light);
  width: 80%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
