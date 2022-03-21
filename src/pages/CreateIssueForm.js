import styled from 'styled-components/macro';
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export default function CreateIssueForm({ handleMyIssues }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      user: '',
      title: '',
      body: '',
      milestone: '',
      labels: '',
      isPinned: false,
    },
  });
  const user = watch('user');
  const title = watch('title');
  const body = watch('body');
  const milestone = watch('milestone');
  const labels = watch('labels');
  const maxTitleLength = 100;
  const maxUserLength = 30;
  const maxBodyLength = 1000;
  const maxMilestoneLength = 50;
  const maxLabelsLength = 100;
  const separatedLabels = labels
    .split(',')
    .map(label => label.trim())
    .filter(tag => tag.length > 0);
  const navigate = useNavigate();

  return (
    <Container
      onSubmit={handleSubmit(data => onSubmit(data))}
      autoComplete="off"
    >
      <Navlink to="/" aria-label="back">
        <svg
          width="38"
          height="38"
          fill="#0085dc"
          viewBox="0 0 16 16"
          title="back"
        >
          <title>Back</title>
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
        </svg>
      </Navlink>
      <small>All fields with an asterisk* are mandatory.</small>
      <FlexContainer>
        <Label htmlFor="user">User*:</Label>
        <Counter>{maxUserLength - user.length}</Counter>
      </FlexContainer>
      <InputField
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
        <Label htmlFor="title">Title*:</Label>
        <Counter>{maxTitleLength - title.length}</Counter>
      </FlexContainer>
      <InputField
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
        <Label htmlFor="body">Body*:</Label>
        <Counter>{maxBodyLength - body.length}</Counter>
      </FlexContainer>
      <TextArea
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
        <Label htmlFor="milestone">Milestone:</Label>
        <Counter>{maxMilestoneLength - milestone.length}</Counter>
      </FlexContainer>
      <InputField
        {...register('milestone')}
        id="milestone"
        placeholder="Enter a milestone"
        maxLength={maxMilestoneLength}
      />

      <FlexContainer>
        <Label htmlFor="labels">Labels:</Label>
        <Counter>{maxLabelsLength - labels.length}</Counter>
      </FlexContainer>
      <InputField
        {...register('labels')}
        id="labels"
        placeholder="Enter labels separated by commas"
        maxLength={maxLabelsLength}
      />

      <Label htmlFor="pin">
        Pin: <Checkbox {...register('isPinned')} type="checkbox" id="pin" />
      </Label>

      <InputButton type="submit" value="SUBMIT" />
    </Container>
  );

  function onSubmit(data) {
    navigate('/myissues');
    handleMyIssues({
      user: data.user,
      title: data.title,
      body: data.body,
      milestone: data.milestone,
      labels: separatedLabels,
      isPinned: data.isPinned,
    });
  }
}

const FlexContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;

const Counter = styled.div`
  font-size: 0.9rem;
  color: var(--font-color-medium);
  align-self: flex-end;
`;

const Container = styled.form`
  margin: 0 10px;
  display: grid;
`;

const Navlink = styled(NavLink)`
  margin-bottom: 10px;
  opacity: 0.8;

  :hover {
    cursor: pointer;
    opacity: 1;
    transition: all 0.15s;
  }
`;

const Label = styled.label`
  :not(:first-of-type) {
    margin-top: 10px;
  }
`;

const InputField = styled.input`
  font-size: 0.9em;
  font-family: monospace;
  height: 2rem;
  border: 1px solid var(--border-color-light);
  border-radius: 5px;

  ::placeholder {
    color: var(--font-color-medium);
  }
`;

const TextArea = styled.textarea`
  font-size: 0.9em;
  font-family: monospace;
  border: 1px solid var(--border-color-light);
  border-radius: 5px;

  ::placeholder {
    color: var(--font-color-medium);
  }
`;

const Checkbox = styled.input`
  margin-top: 10px;
`;

const ErrorMessage = styled.span`
  color: crimson;
  font-size: 0.8rem;
`;

const InputButton = styled.input`
  margin: 15px;
  letter-spacing: 2px;
  font-size: 1.3rem;
  font-weight: bold;
  color: var(--font-color-light);
  background-color: var(--bg-color-action);
  padding: 9px;
  border: none;
  border-radius: 15px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  opacity: 0.8;

  :hover {
    cursor: pointer;

    opacity: 1;
    transition: all 0.15s;
  }

  :active {
    transform: scale(0.95);
  }
`;
