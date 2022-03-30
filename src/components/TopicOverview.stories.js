import TopicOverview from './TopicOverview';

export default {
  title: 'TopicOverview',
  component: TopicOverview,
};

const Template = args => <TopicOverview {...args} />;

export const Default = Template.bind({});
const selectedProject =
  'https://api.github.com/repos/reactjs/reactjs.org/issues';

Default.args = {
  selectedProject: selectedProject,
};
