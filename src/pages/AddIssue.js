import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export default function AddIssue({ handleMyIssues }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      user: 'codingoak',
    },
  });

  function onSubmit(data) {
    handleMyIssues({
      user: data.user,
      title: data.title,
      body: data.body,
      milestone: data.milestone,
      labels: data.labels,
    });
  }

  console.log(watch('example')); // watch input value by passing the name of it

  return (
    <>
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
      <Container
        onSubmit={handleSubmit(data => onSubmit(data))}
        autoComplete="off"
      >
        <label htmlFor="user" type="text">
          User:{' '}
        </label>
        <InputField {...register('user', { required: true })} id="user" />
        <ErrorMessage>Fehler</ErrorMessage>

        <label htmlFor="title" type="text">
          Title:
        </label>
        <InputField {...register('title', { required: true })} id="title" />
        <ErrorMessage>Fehler</ErrorMessage>

        <label htmlFor="body" type="text">
          Body:
        </label>
        <TextArea
          {...register('body', { required: true, maxLength: 600 })}
          rows="5"
          id="body"
        />
        <ErrorMessage>Fehler</ErrorMessage>

        <label htmlFor="milestone">Milestone</label>
        <InputField {...register('milestone')} id="milestone" />

        <label htmlFor="labels">Labels</label>
        <InputField {...register('labels')} id="labels" />

        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <InputButton type="submit" value="SUBMIT" />
      </Container>
    </>
  );
}

const Container = styled.form`
  margin: 10px;
  display: grid;
`;

const Navlink = styled(NavLink)`
  margin: 10px;
  color: blue;
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
`;

const InputField = styled.input`
  margin-bottom: 5px;
  height: 2rem;
`;

const TextArea = styled.textarea`
  margin-bottom: 5px;
`;

const ErrorMessage = styled.span`
  color: crimson;
  font-size: 0.8rem;
  margin-bottom: 12px;
`;

const InputButton = styled.input`
  margin: 10px;
  letter-spacing: 1px;
  font-weight: bold;
  color: var(--font-color-action);
  background-color: var(--bg-color-action);
  padding: 12px 18px;
  border: none;
  border-radius: 21px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;
