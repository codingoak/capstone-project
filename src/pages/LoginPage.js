import styled from 'styled-components/macro';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { ButtonPrimary } from '../components/Button';
import HeadingMain from '../components/HeadingMain';
import useStore, { useUserdata } from '../hooks/useStore';

export default function LoginPage() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const setUsername = useStore(state => state.setUsername);
  const setUserdata = useUserdata(state => state.setUserdata);
  const setUserDataStatus = useStore(state => state.setUserDataStatus);
  const userDataStatus = useStore(state => state.userDataStatus);

  return (
    <>
      <HeadingMain title={'WELCOME TO'} />
      <Wrapper>
        <StyledMain>
          <Logo>
            <h2>MY</h2>
            <svg
              role="img"
              aria-label="Bug logo"
              width="60"
              height="60"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Bug logo</title>
              <path
                d="M357.375 136.287L284.5 156.438C278.194 139.447 268.352 123.99 255.625 111.088L294.15 43.0875C294.961 41.6594 295.483 40.0855 295.685 38.4558C295.888 36.826 295.768 35.1723 295.331 33.5891C294.895 32.0059 294.151 30.5241 293.142 29.2284C292.133 27.9327 290.878 26.8484 289.45 26.0375C286.566 24.3998 283.149 23.9749 279.952 24.8563C276.754 25.7378 274.038 27.8533 272.4 30.7375L235.85 95.2375C228.452 90.4939 220.468 86.7332 212.1 84.05C209.63 75.5192 204.675 67.9174 197.867 62.2137C191.059 56.5101 182.707 52.9631 173.875 52.025L173.838 51.875C173.088 48.875 172.675 46.125 172.613 43.75C172.508 41.7416 172.697 39.7286 173.175 37.775C173.638 36.15 174.175 34.8375 174.738 33.8125C176.563 30.5625 178.988 28.4375 181.95 27.4375C182.238 30.9625 183.725 33.475 186.35 34.9625C188.434 36.0796 190.835 36.4584 193.163 36.0375C195.788 35.6625 197.863 34.1375 199.363 31.5C200.017 30.361 200.428 29.0981 200.568 27.7918C200.707 26.4855 200.574 25.1643 200.175 23.9125C199.782 22.5627 199.122 21.3058 198.233 20.2169C197.344 19.128 196.244 18.2295 195 17.575C193.178 16.5141 191.108 15.9535 189 15.95C184.709 15.9979 180.611 17.7414 177.6 20.8C175.975 22.4 174.6 24.175 173.475 26.1125C171.806 29.1361 170.745 32.4567 170.35 35.8875C169.942 39.3739 169.909 42.894 170.25 46.3875C170.463 48.3875 171 50.1375 171.425 52.0125C166.738 51.7375 161.95 52.0125 157.175 53.35C151.15 55 145.763 57.85 141.175 61.5C140.525 59.35 139.95 57.2 138.925 55.025C137.429 51.8522 135.594 48.8513 133.45 46.075C131.354 43.3194 128.727 41.0115 125.725 39.2875C123.761 38.1999 121.659 37.3841 119.475 36.8625C117.422 36.3278 115.284 36.2049 113.184 36.501C111.083 36.797 109.062 37.5062 107.238 38.5875C105.415 39.6598 103.913 41.2007 102.888 43.05C102.164 44.2524 101.688 45.5869 101.486 46.9755C101.284 48.3641 101.361 49.779 101.713 51.1375C102.011 52.4207 102.573 53.6279 103.362 54.6824C104.152 55.7368 105.152 56.6155 106.3 57.2625C108.925 58.7625 111.488 58.9875 113.925 57.9625C116.153 57.1323 118.032 55.5669 119.25 53.525C120.725 50.9 120.713 47.9875 119.15 44.8375C122.2 44.15 125.363 44.7375 128.613 46.5875C129.613 47.1625 130.738 48.0375 131.988 49.2125C133.188 50.3375 134.388 51.9625 135.55 54.05C136.725 56.125 137.8 58.65 138.675 61.65C138.85 62.2 138.975 62.875 139.125 63.475C133.391 68.6726 129.11 75.2751 126.705 82.6315C124.301 89.9878 123.855 97.8439 125.413 105.425C118.031 112.884 111.883 121.471 107.2 130.863L42.7 94.3C39.8117 92.6752 36.3979 92.2588 33.2036 93.1417C30.0094 94.0246 27.294 96.135 25.65 99.0125C24.0245 101.908 23.609 105.329 24.494 108.529C25.379 111.73 27.4928 114.451 30.375 116.1L98.375 154.6C94.1225 172.208 93.6285 190.514 96.925 208.325L24.075 228.5C22.4898 228.936 21.0063 229.681 19.7095 230.692C18.4126 231.703 17.3279 232.959 16.5174 234.39C15.7069 235.82 15.1866 237.397 14.9863 239.029C14.786 240.66 14.9096 242.316 15.35 243.9C15.789 245.48 16.5351 246.957 17.5456 248.249C18.5562 249.54 19.8113 250.619 21.2393 251.425C22.6672 252.23 24.24 252.747 25.8676 252.944C27.4953 253.141 29.1459 253.016 30.725 252.575L104.225 232.238C110.513 245.438 121.263 260.737 133.85 275.262L93.9375 345.762C92.7099 347.911 92.1491 350.377 92.3266 352.845C92.504 355.314 93.4116 357.673 94.934 359.625C96.4563 361.576 98.5246 363.03 100.876 363.802C103.227 364.575 105.755 364.631 108.138 363.962C111.263 363.112 114.013 361.087 115.7 358.087L151.888 294.213C185.638 326.638 222.938 345.75 224.113 307.375C244.088 339.375 267.238 303.163 280.388 257.688L345.425 294.525C348.425 296.25 351.85 296.55 354.95 295.7C357.33 295.038 359.46 293.687 361.072 291.816C362.684 289.944 363.706 287.638 364.008 285.186C364.31 282.735 363.879 280.249 362.77 278.043C361.661 275.836 359.923 274.007 357.775 272.788L286.525 232.413C290.15 213.613 291.8 195.137 290.525 180.7L364.088 160.363C367.224 159.427 369.869 157.299 371.453 154.435C373.038 151.571 373.436 148.2 372.562 145.046C371.688 141.891 369.611 139.206 366.779 137.566C363.946 135.926 360.583 135.462 357.413 136.275L357.375 136.287Z"
                fill="#007ACC"
              />
            </svg>
            <h2>TRACKER</h2>
          </Logo>
          <StyledForm
            onSubmit={handleSubmit(data => handleLogin(data))}
            autocomplete="off"
            aria-labelledby="login"
          >
            <h2 id="login">Login</h2>
            <input
              {...register('username')}
              autoComplete="off"
              id="username"
              placeholder="Your GitHub username"
            />
            <ButtonPrimary
              type="submit"
              children="LOGIN"
              onClick={() => handleLogin}
            />
          </StyledForm>
          {userDataStatus === 404 ? (
            <p>No user found</p>
          ) : (
            <p>
              <i>or continue without login.</i>
            </p>
          )}
        </StyledMain>
      </Wrapper>
    </>
  );

  function handleLogin(data) {
    setUsername(data.username);
    getUserdata(data.username);

    async function getUserdata(username) {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();

      setUserDataStatus(response.status);
      setUserdata(data);

      if (response.status === 200) {
        navigate('/profilepage');
      }
    }
  }
}

const Logo = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  margin: 30px 0;

  h2 {
    font-size: 2rem;
  }
`;

const StyledForm = styled.form`
  display: grid;
  gap: 10px;

  button {
    margin-top: 125px;
  }

  h2 {
    margin-bottom: 5px;
  }

  input {
    border-radius: 5px;
    border: 1px solid var(--border-color-light);
    font-size: 0.9rem;
    height: 2rem;
    width: 200px;
    margin-top: -5px;
    ::placeholder {
      color: var(--font-color-medium);
      padding-left: 5px;
    }
  }

  label:not(:first-of-type) {
    margin-top: 10px;
  }
`;

const StyledMain = styled.main`
  display: grid;
  place-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
