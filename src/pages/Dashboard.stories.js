import Dashboard from './Dashboard';

export default {
  title: 'Dashboard',
  component: Dashboard,
};

const Template = args => <Dashboard {...args} />;

export const Default = Template.bind({});
Default.args = {
  isLoading: true,
  hasError: false,
  savedIssues: [
    { id: 111, title: 'Teststring1', state: 'open', clicked: true },
    { id: 112, title: 'Teststring2', state: 'close', clicked: false },
    { id: 113, title: 'Teststring3', state: 'open', clicked: true },
  ],
};
