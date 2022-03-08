import IssueHeading from './IssueHeading';

export default {
  title: 'IssueHeading',
  component: IssueHeading,
};

const Template = args => <IssueHeading {...args} />;

export const Default = Template.bind({});
Default.args = {};
