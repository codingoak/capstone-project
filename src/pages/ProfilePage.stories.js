import ProfilePage from './ProfilePage';

export default {
  title: 'ProfilePage',
  component: ProfilePage,
};

const Template = args => <ProfilePage {...args} />;

export const Default = Template.bind({});
Default.args = {
  userdata: {
    avatar_url: 'https://source.unsplash.com/random/400×400/?person',
    location: 'Valencia',
    bio: 'Lorem ipsum...',
    public_repos: 13,
    followers: 13,
    following: 22,
  },
};
