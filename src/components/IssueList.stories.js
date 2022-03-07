import IssueList from './IssueList';

export default {
  title: 'IssueList',
  component: IssueList,
};

const Template = args => <IssueList {...args} />;

export const Default = Template.bind({});
Default.args = {
  issues: [
    { title: 'This is an issue title', state: 'open' },
    { title: 'This is another issue title', state: 'close' },
    { title: 'This is the third issue title', state: 'open' },
    { title: 'This is an the last issue title', state: 'open' },
  ],
};
