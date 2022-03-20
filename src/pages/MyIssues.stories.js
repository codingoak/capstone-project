import MyIssues from './MyIssues';

export default {
  title: 'MyIssues',
  component: MyIssues,
};

const Template = args => <MyIssues {...args} />;

export const issueNotPinned = Template.bind({});
issueNotPinned.args = {
  myIssues: [
    { title: 'This is an issue title', state: 'open', isPinned: false },
    { title: 'Another issue title', state: 'open', isPinned: false },
  ],
};

export const issuePinned = Template.bind({});
issuePinned.args = {
  myIssues: [
    { title: 'This is an issue title', state: 'open', isPinned: true },
    { title: 'Another issue title', state: 'open', isPinned: true },
  ],
};
