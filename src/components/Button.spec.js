import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button', () => {
  it('calls callback button', () => {
    const callback = jest.fn();
    render(<Button handleClick={callback} />);
    const button = screen.getByRole('button');

    userEvent.click(button);
    expect(callback).toHaveBeenCalled();
  });
});
