import Issues from './Issues';

export default {
  title: 'Issues',
  component: Issues,
};

const Template = args => <Issues {...args} />;

export const issueNotPinned = Template.bind({});
issueNotPinned.args = {
  savedIssues: [
    { title: 'This is an issue title', state: 'open', isPinned: false },
  ],
};

export const issuePinned = Template.bind({});
issuePinned.args = {
  savedIssues: [
    { title: 'This is an issue title', state: 'open', isPinned: true },
  ],
};
