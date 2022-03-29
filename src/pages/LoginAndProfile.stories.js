import LoginAndProfile from './LoginAndProfile';

export default {
  title: 'LoginAndProfile',
  component: LoginAndProfile,
};

const Template = args => <LoginAndProfile {...args} />;

export const Default = Template.bind({});
Default.args = {};
