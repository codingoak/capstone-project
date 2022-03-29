import WelcomePage from './WelcomePage'

export default {
  title: 'WelcomePage',
  component: WelcomePage,
};

const Template = args => <WelcomePage {...args} />;

export const Default = Template.bind({});
Default.args = {};
    