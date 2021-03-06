import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid';

import styled from 'styled-components/macro';

import BackArrow from '../components/BackArrow';
import { ButtonPrimary } from '../components/Button';
import HeadingMain from '../components/HeadingMain';
import useStore, { useMyIssues, useUserdata } from '../hooks/useStore';

export default function CreateIssueForm() {
  const setMyIssues = useMyIssues(state => state.setMyIssues);
  const myIssues = useMyIssues(state => state.myIssues);
  const userdata = useUserdata(state => state.userdata);
  const username = useStore(state => state.username);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      user: username,
      title: '',
      body: '',
      milestone: '',
      labels: '',
      isPinned: false,
    },
  });
  const body = watch('body');
  const labels = watch('labels');
  const milestone = watch('milestone');
  const maxTitleLength = 100;
  const maxUserLength = 30;
  const maxBodyLength = 2000;
  const maxMilestoneLength = 50;
  const maxLabelsLength = 100;
  const navigate = useNavigate();
  const separatedLabels = labels
    .split(',')
    .map(label => label.trim())
    .filter(tag => tag.length > 0);
  const title = watch('title');
  const user = watch('user');

  return (
    <>
      <HeadingMain title={'CREATE FORM'} />
      <main>
        <StyledForm
          onSubmit={handleSubmit(data => onSubmit(data))}
          autoComplete="off"
        >
          <h2 className="sr-only">Create an issue form</h2>
          <Back>
            <BackArrow to="/dashboard" />
          </Back>
          <Message>
            <Asterisk>*</Asterisk> Required fields.
          </Message>
          <FlexContainer>
            <label htmlFor="user">
              User<Asterisk>*</Asterisk>:
            </label>
            <Counter>{maxUserLength - user?.length}</Counter>
          </FlexContainer>
          <input
            {...register('user', {
              minLength: { value: 2, message: 'Name is to short' },
            })}
            id="user"
            placeholder="Enter your (GitHub) username"
            maxLength={maxUserLength}
            required
          />
          <ErrorMessage>{errors.user?.message}</ErrorMessage>

          <FlexContainer>
            <label htmlFor="title">
              Title<Asterisk>*</Asterisk>:
            </label>
            <Counter>{maxTitleLength - title.length}</Counter>
          </FlexContainer>
          <input
            {...register('title', {
              minLength: { value: 2, message: 'Title is to short' },
            })}
            id="title"
            placeholder="Enter a short description"
            maxLength={maxTitleLength}
            required
          />
          <ErrorMessage>{errors.title?.message}</ErrorMessage>

          <FlexContainer>
            <label htmlFor="body">
              Body<Asterisk>*</Asterisk>:
            </label>
            <Counter>{maxBodyLength - body.length}</Counter>
          </FlexContainer>
          <textarea
            {...register('body', {
              minLength: { value: 5, message: 'Body is to short' },
            })}
            rows="5"
            id="body"
            placeholder="Enter a meaningful explanation of the problem"
            maxLength={maxBodyLength}
            required
          />
          <ErrorMessage>{errors.body?.message}</ErrorMessage>

          <FlexContainer>
            <label htmlFor="milestone">Milestone:</label>
            <Counter>{maxMilestoneLength - milestone.length}</Counter>
          </FlexContainer>
          <input
            {...register('milestone')}
            id="milestone"
            placeholder="Enter a milestone"
            maxLength={maxMilestoneLength}
          />

          <FlexContainer>
            <label htmlFor="labels">Labels:</label>
            <Counter>{maxLabelsLength - labels.length}</Counter>
          </FlexContainer>
          <input
            {...register('labels')}
            id="labels"
            placeholder="Enter labels separated by commas"
            maxLength={maxLabelsLength}
          />

          <ButtonPrimary type="submit" children="SUBMIT" />
        </StyledForm>
      </main>
    </>
  );

  function handleMyIssues({ body, isPinned, labels, milestone, title, user }) {
    const id = nanoid();
    const date = new Date().toLocaleString();

    setMyIssues([
      {
        user,
        avatar: userdata.avatar_url,
        body,
        created_at: date,
        id,
        isPinned,
        labels,
        milestone,
        state: 'open',
        title,
      },
      ...myIssues,
    ]);
  }

  function onSubmit(data) {
    navigate('/myissues');
    handleMyIssues({
      ...data,
      milestone: data.milestone ? data.milestone : 'no milestone',
      labels: separatedLabels,
      isPinned: data.isPinned,
    });
  }
}

const Asterisk = styled.span`
  color: crimson;
`;

const Back = styled.div`
  margin-top: 10px;
`;

const Counter = styled.div`
  align-self: flex-end;
  color: var(--font-color-medium);
  font-size: 0.9rem;
`;

const ErrorMessage = styled.span`
  color: crimson;
  font-size: 0.8rem;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const Message = styled.p`
  font-size: 0.9rem;
  font-style: italic;
  margin-bottom: 10px;
`;

const StyledForm = styled.form`
  display: grid;
  margin: 0 30px;

  input {
    border-radius: 5px;
    border: 1px solid var(--border-color-medium);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 8px 18px -5px,
      rgba(0, 0, 0, 0.3) 0px 6px 13px -8px;
    font-family: monospace;
    font-size: 0.9rem;
    height: 2rem;
    ::placeholder {
      color: var(--font-color-medium);
      padding-left: 5px;
    }
  }

  input:last-of-type {
    margin-bottom: 20px;
  }

  label {
    font-weight: bold;
  }

  label:not(:first-of-type) {
    margin-top: 10px;
  }

  textarea {
    border-radius: 5px;
    border: 1px solid var(--border-color-medium);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 8px 18px -5px,
      rgba(0, 0, 0, 0.3) 0px 6px 13px -8px;
    font-family: monospace;
    font-size: 0.9rem;
    ::placeholder {
      color: var(--font-color-medium);
      padding-left: 5px;
    }
  }
`;
