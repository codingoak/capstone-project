import FetchedIssues from './FetchedIssues';

export default {
  title: 'FetchedIssues',
  component: FetchedIssues,
};

const Template = args => <FetchedIssues {...args} />;

export const issueNotPinned = Template.bind({});
issueNotPinned.args = {
  savedIssues: [
    { title: 'This is an issue title', state: 'open', isPinned: false },
    { title: 'Another issue title', state: 'open', isPinned: false },
  ],
};

export const issuePinned = Template.bind({});
issuePinned.args = {
  savedIssues: [
    { title: 'This is an issue title', state: 'open', isPinned: true },
    { title: 'Another issue title', state: 'open', isPinned: true },
  ],
};
