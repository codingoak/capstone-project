export default function handler() {
  const accessTokenData = await accessTokenResponse.json();

  const githubAccessToken = accessTokenData.access_token;

  const profileResponse = await fetch('https://api.github.com/user', {
    headers: {
      Authorization: `Bearer ${githubAccessToken}`,
    },
  });

  const profile = await profileResponse.json();

  const githubName = profile.login;

  await connectToMongodb();

  const foundUser = await.User.find({ githubName });

  if (foundUser) {
    //
  } else {
    const newUser = new User({ githubName });
  }
  res.status(200).json(profile);
}
