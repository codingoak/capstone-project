import GitHubRedirectPage from './GitHubRedirectPage'

export default {
  title: 'GitHubRedirectPage',
  component: GitHubRedirectPage,
};

const Template = args => <GitHubRedirectPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
    