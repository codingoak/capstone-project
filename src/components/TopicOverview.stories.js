import TopicOverview from './TopicOverview'

export default {
  title: 'TopicOverview',
  component: TopicOverview,
};

const Template = args => <TopicOverview {...args} />;

export const Default = Template.bind({});
Default.args = {};
    