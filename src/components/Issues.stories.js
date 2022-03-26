import Issues from './Issues';

export default {
  title: 'Issues',
  component: Issues,
};

const Template = args => <Issues {...args} />;

export const issuesNotPinned = Template.bind({});
issuesNotPinned.args = {
  issues: [
    { title: 'This is an issue title', state: 'open', isPinned: false },
    { title: 'Another issue title', state: 'open', isPinned: false },
  ],
};

export const issuesPinned = Template.bind({});

issuesPinned.args = {
  issues: [
    { title: 'This is an issue title', state: 'open', isPinned: true },
    { title: 'Another issue title', state: 'open', isPinned: true },
  ],
};
