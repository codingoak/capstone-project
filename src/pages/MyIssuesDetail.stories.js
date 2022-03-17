import MyIssuesDetail from './MyIssuesDetail'

export default {
  title: 'MyIssuesDetail',
  component: MyIssuesDetail,
};

const Template = args => <MyIssuesDetail {...args} />;

export const Default = Template.bind({});
Default.args = {};
    