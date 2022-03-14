import Selection from './Selection';

export default {
  title: 'Selection',
  component: Selection,
};

const Template = args => <Selection {...args} />;

export const Default = Template.bind({});
Default.args = {};
