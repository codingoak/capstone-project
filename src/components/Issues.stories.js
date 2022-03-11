import Issues from './Issues';

export default {
  title: 'Issues',
  component: Issues,
};

const Template = args => <Issues {...args} />;

export const Default = Template.bind({});
Default.args = {
  savedIssues: [
    { title: 'This is an issue title', state: 'open' },
    { title: 'This is another issue title', state: 'close' },
    { title: 'This is the third issue title', state: 'open' },
    { title: 'This is an the last issue title', state: 'open' },
  ],
};
