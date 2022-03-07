import LoadingAnimation from './LoadingAnimation.js';

export default {
  title: 'LoadingAnimation',
  component: LoadingAnimation,
};

const Template = args => <LoadingAnimation {...args} />;

export const Default = Template.bind({});
Default.args = {};
