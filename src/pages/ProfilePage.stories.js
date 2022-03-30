import ProfilePage from './ProfilePage';

export default {
  title: 'ProfilePage',
  component: ProfilePage,
};

const Template = args => <ProfilePage {...args} />;

export const Profile = Template.bind({});
Profile.args = {
  userdata: {
    avatar_url: 'https://source.unsplash.com/random/300×350/?person',
    location: 'Valencia',
    bio: 'Lorem ipsum...',
    public_repos: 13,
    followers: 13,
    following: 22,
  },
};

export const LoginFirst = Template.bind({});
LoginFirst.args = {
  userdata: false,
};
