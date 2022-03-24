import styled from 'styled-components/macro';

const Button = styled.button`
  display: flex;
  justify-self: center;
  letter-spacing: 1px;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 5px;
  padding: 6px 16px;
  white-space: nowrap;
  border: none;
  border-radius: 31px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  color: var(--font-color-dark);
  opacity: 0.8;

  :hover {
    cursor: pointer;
    opacity: 1;
    transition: all 0.15s;
  }
  :active {
    transform: scale(0.95);
  }
  :focus {
    opacity: 1;
    border: 3px solid white;
  }
`;

export default Button;

const ButtonPrimary = styled(Button)`
  color: white;
  border: 3px solid var(--bg-color-primary-dark);
  background: radial-gradient(
    var(--bg-color-primary),
    var(--bg-color-primary-dark)
  );
`;

export { ButtonPrimary };

const ButtonPrimarySmall = styled(ButtonPrimary)`
  letter-spacing: 1px;
  font-size: 1rem;
  font-weight: normal;
  padding: 5px 13px;
`;

export { ButtonPrimarySmall };

const ButtonSecondary = styled(Button)`
  color: var(--font-color-light);
  border: 3px solid var(--bg-color-secondary-dark);
  background: radial-gradient(
    var(--bg-color-secondary),
    var(--bg-color-secondary-dark)
  );
`;

export { ButtonSecondary };
