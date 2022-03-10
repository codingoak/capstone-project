import styled from 'styled-components/macro';

export default function StandartButton({ handleClick, children }) {
  return <StandardButton onClick={handleClick}>{children}</StandardButton>;
}

const StandardButton = styled.button`
  display: flex;
  justify-self: center;

  letter-spacing: 1px;
  font-size: 16px;
  font-weight: bold;
  color: var(--font-color-light);
  background-color: var(--bg-color-dark);
  padding: 12px 18px;
  border: none;
  border-radius: 21px;
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
