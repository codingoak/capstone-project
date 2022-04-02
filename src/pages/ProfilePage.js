import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components/macro';

import { ButtonPrimary, ButtonSecondary } from '../components/Button';
import HeadingMain from '../components/HeadingMain';
import useStore, { useUserdata } from '../hooks/useStore';

export default function ProfilePage() {
  const navigate = useNavigate();
  const setUserdata = useUserdata(state => state.setUserdata);
  const setUsername = useStore(state => state.setUsername);
  const userdata = useUserdata(state => state.userdata);

  return (
    <>
      <HeadingMain title="PROFILE" />
      <>
        {userdata.avatar_url ? (
          <main>
            <Top>
              <ProfilHead>
                <Avatar
                  src={userdata.avatar_url}
                  alt={`GitHub avatar`}
                  width="130"
                  height="130"
                />
                <div>
                  <h2>{userdata.name}</h2>
                  <h3>{userdata.login}</h3>
                </div>
              </ProfilHead>
              <ProfileBody>
                <dt>Public repos:</dt>
                <dd>{userdata.public_repos}</dd>
                <dt>Followers:</dt>
                <dd>{userdata.followers}</dd>
                <dt>Following:</dt>
                <dd>{userdata.following}</dd>
                <dt>Location:</dt>
                <dd>{userdata.location}</dd>
              </ProfileBody>
            </Top>
            <Bottom>
              <Bio>
                <h2>Bio:</h2>
                <p>{userdata.bio}</p>
              </Bio>
              <a href={userdata.blog} rel="noreferrer" target="_blank">
                {userdata.blog}
              </a>
              <ButtonContainer>
                <ButtonSecondary children={'LOGOUT'} onClick={handleLogout} />
              </ButtonContainer>
            </Bottom>
          </main>
        ) : (
          <FlexContainer>
            <p>
              <i>No profile.</i>
            </p>
            <ButtonPrimary as={NavLink} to="/" children={'LOGIN FIRST'} />
          </FlexContainer>
        )}
      </>
    </>
  );

  function handleLogout() {
    navigate('/');
    setUsername('');
    setUserdata('');
  }
}

const Avatar = styled.img`
  border-radius: 50%;
`;

const Bio = styled.div`
  h2 {
    margin: 0 10px;
  }
  p {
    background-color: var(--bg-color-light);
    border-radius: 10px;
    margin-top: 5px;
    padding: 15px;
  }
`;

const Bottom = styled.div`
  margin: 20px;

  a {
    margin: 15px;
    :visited {
      color: blue;
    }
  }
  dt {
    font-weight: bold;
  }

  dd {
    margin: 0px;
  }
`;

const ButtonContainer = styled.div`
  display: grid;
  margin-top: 3px;
  place-items: center;
`;

const FlexContainer = styled.main`
  margin-top: 100px;
  display: grid;
  place-items: center;
  gap: 100px;
`;

const ProfileBody = styled.dl`
  margin: 5px 0;
  border-left: 1px solid var(--border-color-dark);
  padding: 1px 15px;

  dd {
    margin: 0 0 10px 5px;
  }

  dt {
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 0px;
  }
`;

const ProfilHead = styled.div`
  display: grid;
  place-items: center;
  padding: 1px 15px;

  h2,
  h3 {
    margin: 0;
    padding: 0;
  }

  h3 {
    font-weight: normal;
  }

  p {
    margin: 5px 0;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;
