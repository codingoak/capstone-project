import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import arrowLeftIcon from '../images/arrow-left.svg';

export default function AddIssue() {
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
  const onSubmit = data => console.log(data);

  console.log(watch('example')); // watch input value by passing the name of it

  return (
    <>
      <Navlink to="/">
        <ArrowBack src={arrowLeftIcon} alt="back" width="38" height="38" />
      </Navlink>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <Container onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="user">User: </label>
        <InputField {...register('user', { required: true })} id="user" />

        {/* register your input into the hook by invoking the "register" function */}
        <label htmlFor="title">Title:</label>
        <InputField {...register('title', { required: true })} id="title" />

        {/* include validation with required or other standard HTML validation rules */}
        <label htmlFor="body">Body:</label>
        <TextArea
          {...register('body', { required: true, maxLength: 600 })}
          rows="5"
          id="body"
        />
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
  gap: 2px;
  font-size: 16px;
`;

const Navlink = styled(NavLink)`
  margin: 10px;
  color: blue;
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
`;
const ArrowBack = styled.img`
  margin-top: 10px;
`;

const InputField = styled.input`
  margin-bottom: 5px;
  height: 2rem;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  margin-bottom: 5px;
`;

const InputButton = styled.input`
  margin: 10px;
  letter-spacing: 1px;
  font-size: 16px;
  font-weight: bold;
  color: var(--font-color-action);
  background-color: var(--bg-color-action);
  padding: 12px 18px;
  border: none;
  border-radius: 21px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;
