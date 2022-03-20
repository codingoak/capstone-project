import CreateIssueForm from './CreateIssueForm';

export default {
  title: 'CreateIssueForm',
  component: CreateIssueForm,
};

const Template = args => <CreateIssueForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
