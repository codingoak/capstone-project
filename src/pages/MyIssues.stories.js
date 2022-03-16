import MyIssues from './MyIssues'

export default {
  title: 'MyIssues',
  component: MyIssues,
};

const Template = args => <MyIssues {...args} />;

export const Default = Template.bind({});
Default.args = {};
    