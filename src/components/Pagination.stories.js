import Pagination from './Pagination';

export default {
  title: 'Pagination',
  component: Pagination,
};

const Template = args => <Pagination {...args} />;

export const TwoButtons = Template.bind({});

TwoButtons.args = {
  paginationUrls: [
    {
      url: 'https://api.github.com/repositories/105963253/issues?page=2',
      title: 'next',
    },
    {
      url: 'https://api.github.com/repositories/105963253/issues?page=37',
      title: 'last',
    },
  ],
};

export const FourButtons = Template.bind({});

FourButtons.args = {
  paginationUrls: [
    {
      url: 'https://api.github.com/repositories/105963253/issues?page=3',
      title: 'prev',
    },
    {
      url: 'https://api.github.com/repositories/105963253/issues?page=4',
      title: 'next',
    },
    {
      url: 'https://api.github.com/repositories/105963253/issues?page=37',
      title: 'last',
    },
    {
      url: 'https://api.github.com/repositories/105963253/issues',
      title: 'first',
    },
  ],
};
