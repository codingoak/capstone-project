import Dashboard from './Dashboard';

export default {
  title: 'Dashboard',
  component: Dashboard,
};

const Template = args => <Dashboard {...args} />;

export const Loading = Template.bind({});

const validUrl = 'https://api.github.com/repos/reactjs/reactjs.org/issues';

Loading.args = {
  isLoading: true,
  selectedProject: validUrl,
  comparedIssues: [
    { id: 111, title: 'Teststring1', state: 'open', clicked: true },
    { id: 112, title: 'Teststring2', state: 'close', clicked: false },
    { id: 113, title: 'Teststring3', state: 'open', clicked: true },
  ],
};

export const Error = Template.bind({});

const invalidUrl = 'https://api.gihub.com/repos/reactjs/reactjs.org/issues';

Error.args = {
  hasError: true,
  selectedProject: invalidUrl,
  comparedIssues: [
    { id: 111, title: 'Teststring1', state: 'open', clicked: true },
    { id: 112, title: 'Teststring2', state: 'close', clicked: false },
    { id: 113, title: 'Teststring3', state: 'open', clicked: true },
  ],
};

export const Default = Template.bind({});
Default.args = {
  selectedProject: validUrl,
  comparedIssues: [
    { id: 111, title: 'Teststring1', state: 'open', clicked: true },
    { id: 112, title: 'Teststring2', state: 'close', clicked: false },
    { id: 113, title: 'Teststring3', state: 'open', clicked: true },
  ],
};
