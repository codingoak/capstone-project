import styled from 'styled-components/macro';

const Button = styled.button`
  border-radius: 32px;
  border: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  color: var(--font-color-dark);
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 10px 5px 5px;
  opacity: 0.8;
  padding: 10px 24px;
  white-space: nowrap;
  :active {
    transform: scale(0.95);
  }
  :focus {
    border: 3px solid white;
    opacity: 1;
  }
  :hover {
    cursor: pointer;
    opacity: 1;
    transition: all 0.15s;
  }

  &:active,
  &:hover,
  &:link,
  &:visited {
    text-decoration: none;
  }
`;

export default Button;

const ButtonPrimary = styled(Button)`
  background: radial-gradient(
    var(--bg-color-primary),
    var(--bg-color-primary-dark)
  );
  border: 2px solid var(--bg-color-primary-dark);
  color: white;
`;

export { ButtonPrimary };

const ButtonPrimarySmall = styled(ButtonPrimary)`
  font-size: 1rem;
  font-weight: normal;
  letter-spacing: 1px;
  padding: 5px 13px;
`;

export { ButtonPrimarySmall };

const ButtonSecondary = styled(Button)`
  background: radial-gradient(
    var(--bg-color-secondary),
    var(--bg-color-secondary-dark)
  );
  border: 2px solid var(--bg-color-secondary-dark);
  color: var(--font-color-light);
`;

export { ButtonSecondary };

const ButtonSecondarySmall = styled(ButtonPrimarySmall)`
  border: 2px solid transparent;
`;

export { ButtonSecondarySmall };
