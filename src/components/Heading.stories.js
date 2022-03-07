import Heading from './Heading.js';

export default {
  title: 'Heading',
  component: Heading,
};

const Template = args => <Heading {...args} />;

export const Dashboard = Template.bind({});
Dashboard.args = {};
