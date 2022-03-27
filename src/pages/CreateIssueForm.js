import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styled from 'styled-components/macro';

import BackArrow from '../components/BackArrow';
import { ButtonPrimary } from '../components/Button';
import HeadingMain from '../components/HeadingMain';

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
    <>
      <HeadingMain title={'CREATE FORM'} />
      <main>
        <StyledForm
          onSubmit={handleSubmit(data => onSubmit(data))}
          autoComplete="off"
        >
          <BackArrow to="/" />
          <Message>
            All fields with an asterisk<Asterisk>*</Asterisk> are mandatory.
          </Message>
          <FlexContainer>
            <Label htmlFor="user">
              User<Asterisk>*</Asterisk>:
            </Label>
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
            <Label htmlFor="title">
              Title<Asterisk>*</Asterisk>:
            </Label>
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
            <Label htmlFor="body">
              Body<Asterisk>*</Asterisk>:
            </Label>
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

          <ButtonPrimary type="submit" children="SUBMIT" />
        </StyledForm>
      </main>
    </>
  );

  function onSubmit(data) {
    navigate('/myissues');
    console.log(separatedLabels.length);
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

const Checkbox = styled.input`
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

const InputField = styled.input`
  border-radius: 5px;
  border: 1px solid var(--border-color-light);
  font-family: monospace;
  font-size: 0.9rem;
  height: 2rem;
  ::placeholder {
    color: var(--font-color-medium);
  }
`;

const Label = styled.label`
  :not(:first-of-type) {
    margin-top: 10px;
  }
`;

const Message = styled.p`
  font-size: 0.9rem;
  font-style: italic;
`;

const StyledForm = styled.form`
  display: grid;
  margin: 0 10px;
`;

const TextArea = styled.textarea`
  border-radius: 5px;
  border: 1px solid var(--border-color-light);
  font-family: monospace;
  font-size: 0.9rem;
  ::placeholder {
    color: var(--font-color-medium);
  }
`;
