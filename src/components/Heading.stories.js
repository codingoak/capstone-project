import Heading from './Heading';

export default {
  title: 'Heading',
  component: Heading,
};

const Template = args => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'HeaderText',
};
