import Issues from './Issues';

export default {
  title: 'Issues',
  component: Issues,
};

const Template = args => <Issues {...args} />;

export const Default = Template.bind({});
Default.args = {
  savedIssues: [
    { title: 'This is an issue title', state: 'open', isPinned: true },
    { title: 'This is another issue title', state: 'close', isPinned: false },
  ],
};
