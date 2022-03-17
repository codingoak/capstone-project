import MyIssueDetails from './MyIssueDetails';

export default {
  title: 'MyIssueDetails',
  component: MyIssueDetails,
};

const Template = args => <MyIssueDetails {...args} />;

export const Default = Template.bind({});
Default.args = {};
