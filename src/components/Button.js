import styled from 'styled-components/macro';

const Button = styled.button`
  display: flex;
  justify-self: center;
  letter-spacing: 2px;
  font-size: 1.3rem;
  font-weight: bold;
  margin: 5px;
  padding: 9px 32px;
  white-space: nowrap;
  border: none;
  border-radius: 15px;
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
`;

export default Button;

const ButtonPrimary = styled(Button)`
  color: var(--font-color-light);
  background-color: var(--bg-color-primary);
`;

export { ButtonPrimary };

const ButtonSecondary = styled(Button)`
  color: var(--font-color-light);
  background-color: var(--bg-color-secondary);
`;

export { ButtonSecondary };
