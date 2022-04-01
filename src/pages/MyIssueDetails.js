import { useEffect, useState } from 'react';

import styled from 'styled-components/macro';

import BackArrow from '../components/BackArrow';
import { ButtonPrimarySmall, ButtonSecondary } from '../components/Button';
import HeadingMain from '../components/HeadingMain';
import RemoveDialog from '../components/RemoveDialog';

export default function MyIssueDetails({
  avatar,
  handleEditIssue,
  handleRemoveIssue,
  myIssue,
  myIssues,
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
      <HeadingMain title="DETAILS" />

      <Back>
        <BackArrow to="/myissues" />
      </Back>

      <Message>
        <Asterisk>*</Asterisk> Click on the values to edit.
      </Message>

      <Wrapper>
        <Top>
          <ProfilHead>
            {avatar ? (
              <img
                src={avatar}
                alt={`Avatar of ${myIssue.user}`}
                width="110"
                height="110"
              />
            ) : null}
            <div>
              <h2>{myIssue.user}</h2>
            </div>
          </ProfilHead>

          <ProfileBody>
            <dt id="state">
              State<Asterisk>*</Asterisk>:
            </dt>
            <FlexContainer>
              {editState ? (
                <>
                  <StyledInput
                    aria-labelledby="state"
                    type="text"
                    defaultValue={myIssue.state}
                    onChange={e => {
                      myIssue.state = e.target.value;
                      handleEditIssue(myIssue);
                    }}
                  />
                  <ButtonPrimarySmall
                    onClick={() => setEditState(false)}
                    children={'EDIT'}
                  />
                </>
              ) : (
                <dd onClick={() => setEditState(true)}>{myIssue.state}</dd>
              )}
            </FlexContainer>
            <dt>Issue ID:</dt>
            <dd>{myIssue.id}</dd>
            <dt id="milestone">
              Milestone<Asterisk>*</Asterisk>:
            </dt>
            <FlexContainer>
              {editMilestone ? (
                <>
                  <StyledInput
                    aria-labelledby="milestone"
                    type="text"
                    defaultValue={myIssue.milestone}
                    onChange={e => {
                      const milestone = e.target.value;
                      handleEditIssue({ ...myIssue, milestone });
                    }}
                  />
                  <ButtonPrimarySmall
                    onClick={() => setEditMilestone(false)}
                    children={'EDIT'}
                  />
                </>
              ) : (
                <dd onClick={() => setEditMilestone(true)}>
                  {myIssue.milestone}
                </dd>
              )}
            </FlexContainer>
          </ProfileBody>
        </Top>

        <Bottom>
          <Title>
            <dt id="title">
              Title<Asterisk>*</Asterisk>:
            </dt>
            {editTitle ? (
              <>
                <StyledInput
                  aria-labelledby="title"
                  type="text"
                  defaultValue={myIssue.title}
                  onChange={e => {
                    const title = e.target.value;
                    handleEditIssue({ ...myIssue, title });
                  }}
                />
                <ButtonPrimarySmall
                  onClick={() => setEditTitle(false)}
                  children={'EDIT'}
                />
              </>
            ) : (
              <dd onClick={() => setEditTitle(true)}>{myIssue.title}</dd>
            )}
          </Title>
          <Bio>
            <dt id="body">
              Body<Asterisk>*</Asterisk>:
            </dt>
            <FlexContainer>
              {editBody ? (
                <>
                  <StyledInput
                    aria-labelledby="body"
                    type="text"
                    defaultValue={myIssue.body}
                    onChange={e => {
                      const body = e.target.value;
                      handleEditIssue({ ...myIssue, body });
                    }}
                  />
                  <ButtonPrimarySmall
                    onClick={() => setEditBody(false)}
                    children={'EDIT'}
                  />
                </>
              ) : (
                <dd onClick={() => setEditBody(true)}>{myIssue.body}</dd>
              )}
            </FlexContainer>
          </Bio>

          <More>
            <>
              {editLabels ? (
                <>
                  <dt id="labels">
                    Labels<Asterisk>*</Asterisk>:
                  </dt>
                  <FlexContainer>
                    <StyledInput
                      aria-labelledby="labels"
                      type="text"
                      defaultValue={myIssue.labels}
                      onChange={e => {
                        const labels = e.target.value
                          .split(',')
                          .map(label => label.trim())
                          .filter(tag => tag.length > 0);
                        handleEditIssue({ ...myIssue, labels });
                      }}
                    />
                    <ButtonPrimarySmall
                      onClick={() => setEditLabels(false)}
                      children={'EDIT'}
                    />
                  </FlexContainer>
                </>
              ) : (
                <>
                  <dt>
                    Labels<Asterisk>*</Asterisk>:
                  </dt>
                  {myIssue.labels.length > 0 ? (
                    myIssue.labels.map((label, index) => (
                      <dd key={index + myIssue.id}>{label}</dd>
                    ))
                  ) : (
                    <dd onClick={() => setEditLabels(true)}>no labels</dd>
                  )}
                  <dt>Created at:</dt>
                  <dd>{myIssue.created_at}</dd>
                  {myIssue.updated_at ? (
                    <>
                      <dt>Updated at:</dt>
                      <dd>{myIssue.updated_at}</dd>
                    </>
                  ) : null}
                </>
              )}
            </>
          </More>
        </Bottom>

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

const Asterisk = styled.span`
  color: crimson;
`;

const Back = styled.div`
  margin: 20px 30px 10px;
`;

const Bio = styled.dl`
  background-color: var(--bg-color-light);
  border-radius: 10px;
  padding: 15px;
`;

const Bottom = styled.div`
  margin: 20px;

  dt {
    font-weight: bold;
  }

  dd {
    margin: 0px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.dl`
  margin: 0 15px;
`;

const Message = styled.p`
  font-size: 0.9rem;
  font-style: italic;
  margin: 0 30px;
  word-break: normal;
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
  display: grid;
  place-items: center;
  padding: 1px 20px;

  h2 {
    font-size: 1.3rem;
    margin-left: 10px;
    padding: 0;
  }

  img {
    border-radius: 50%;
    margin-top: 15px;
  }

  p {
    margin: 5px 0;
  }
`;

const More = styled.dl`
  margin-left: 15px;

  dt {
    margin-top: 10px;
  }
`;

const StyledInput = styled.input`
  border-radius: 5px;
  border: 1px solid var(--border-color-light);
  width: 70%;
  height: 2rem;
`;

const Top = styled.section`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.main`
  word-break: break-all;
`;
