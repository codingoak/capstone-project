import { render, screen } from '@testing-library/react';

import Pagination from './Pagination';

describe('Pagination', () => {
  const paginationUrls = [
    {
      url: 'https://api.github.com/repositories/105963253/issues?page=2',
      title: 'next',
    },
    {
      url: 'https://api.github.com/repositories/105963253/issues?page=37',
      title: 'last',
    },
  ];

  it('renders buttons', () => {
    render(<Pagination paginationUrls={paginationUrls} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });

  it('renders the button title', () => {
    render(<Pagination paginationUrls={paginationUrls} />);
    const buttonNextTitle = screen.getByText('next');
    expect(buttonNextTitle).toBeInTheDocument();
  });
});
