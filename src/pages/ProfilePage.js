import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

import { ButtonPrimary, ButtonSecondary } from '../components/Button';
import HeadingMain from '../components/HeadingMain';

export default function ProfilePage({ handleLogout, userdata }) {
  return (
    <>
      <HeadingMain title="PROFILE" />
      {userdata.avatar_url ? (
        <>
          <ProfilHead>
            <Avatar
              src={userdata.avatar_url}
              alt={`GitHub avatar`}
              width="170"
              height="170"
            />
            <h2>{userdata.name}</h2>
            <h3>{userdata.login}</h3>
          </ProfilHead>
          <ProfileBody>
            <GridContainer>
              <dt>Location:</dt>
              <dd>{userdata.location}</dd>
              <dt>Bio:</dt>
              <dd>{userdata.bio}</dd>
              <dt>Public repos:</dt>
              <dd>{userdata.public_repos}</dd>
              <dt>Followers:</dt>
              <dd>{userdata.followers}</dd>
              <dt>Following:</dt>
              <dd>{userdata.following}</dd>
            </GridContainer>
            <ButtonSecondary children={'LOGOUT'} onClick={handleLogout} />
          </ProfileBody>
        </>
      ) : (
        <FlexContainer>
          <p>No profile</p>

          <ButtonPrimary as={NavLink} to="/" children={'LOGIN FIRST'} />
        </FlexContainer>
      )}
    </>
  );
}

const Avatar = styled.img`
  margin: 10px 0 10px;
  border-radius: 50%;
`;

const FlexContainer = styled.div`
  margin-top: 100px;
  display: grid;
  place-items: center;
  gap: 100px;
`;

const GridContainer = styled.dl`
  display: grid;
  grid-template-columns: 40% 60%;
`;

const ProfileBody = styled.div`
  margin: 15px 20px 0;

  dd {
    margin: 10px 0 0;
  }

  dt {
    font-weight: bold;
    margin-top: 10px;
    min-width: 150px;
  }

  button {
    margin: 10px auto;
  }
`;

const ProfilHead = styled.div`
  display: grid;
  place-items: center;

  h2,
  h3 {
    margin: 0;
    padding: 0;
  }

  h3 {
    font-weight: normal;
  }
`;
