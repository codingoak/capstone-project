import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

const Template = args => <Button {...args}>CLICK ME!</Button>;

export const Default = Template.bind({});
Default.args = {};
