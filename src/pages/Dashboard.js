import { useEffect } from 'react';

import { keyframes } from 'styled-components/macro';
import styled from 'styled-components/macro';

import { ButtonPrimary } from '../components/Button';
import FetchedIssues from '../components/FetchedIssues';
import HeadingMain from '../components/HeadingMain';
import Pagination from '../components/Pagination';

import Selection from '../components/Selection';
import TopicOverview from '../components/TopicOverview';
import useStore, { usePinnedIssues } from '../hooks/useStore';

export default function Dashboard({ sortPins, togglePin }) {
  const comparedIssues = useStore(state => state.comparedIssues);
  const hasError = useStore(state => state.hasError);
  const isLoading = useStore(state => state.isLoading);
  const paginationUrls = useStore(state => state.paginationUrls);
  const pinnedIssues = usePinnedIssues(state => state.pinnedIssues);
  const selectedProject = useStore(state => state.selectedProject);
  const setComparedIssues = useStore(state => state.setComparedIssues);
  const setHasError = useStore(state => state.setHasError);
  const setIsLoading = useStore(state => state.setIsLoading);
  const setPaginationUrls = useStore(state => state.setPaginationUrls);

  useEffect(() => {
    getData(selectedProject);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedProject]);

  return (
    <>
      <HeadingMain title="DASHBOARD" />
      <TopicContainer>
        <Selection />
        {selectedProject && <TopicOverview />}
      </TopicContainer>
      {isLoading && (
        <LoadingContainer>
          <Circle
            aria-label="Rotating circular arrow"
            fill="#0b2b40"
            height="32"
            role="img"
            viewBox="0 0 16 16"
            width="32"
          >
            <title>Loading...</title>
            <path
              fillRule="evenodd"
              d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
            />
            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
          </Circle>
        </LoadingContainer>
      )}
      {!selectedProject && (
        <main>
          <EmptyState>
            <i>Select an option from the box above.</i>
          </EmptyState>
        </main>
      )}
      {comparedIssues && !isLoading && !hasError && (
        <>
          <FetchedIssues togglePin={togglePin} />
          {paginationUrls && !isLoading && !hasError && (
            <Pagination getData={getData} />
          )}
        </>
      )}
      {hasError && (
        <ErrorContainer>
          <ErrorState>Oops, something went wrong</ErrorState>
          <ButtonPrimary
            children={'TRY AGAIN'}
            onClick={() => getData(selectedProject)}
          />
        </ErrorContainer>
      )}
    </>
  );

  function compareIssues(data) {
    const compared = data.map(fetchedIssue => {
      const foundIssue = pinnedIssues?.find(
        savedIssue => savedIssue.id === fetchedIssue.id
      );
      if (foundIssue) {
        return {
          ...fetchedIssue,
          isPinned: foundIssue.isPinned,
        };
      } else {
        return {
          ...fetchedIssue,
          isPinned: false,
        };
      }
    });

    sortPins(compared);
    setComparedIssues(compared);
  }

  async function getData(url) {
    window.scrollTo(0, 0);

    if (selectedProject) {
      try {
        setIsLoading(true);
        setHasError(false);
        const response = await fetch(url);

        if (response.ok) {
          getDataForPagination(response);
          const data = await response.json();
          compareIssues(data);
        } else {
          throw new Error('Response not ok');
        }
      } catch (error) {
        console.error(error);
        setHasError(true);
      }
      setIsLoading(false);
    }
  }

  function getDataForPagination(response) {
    const link = response.headers.get('Link');
    const links = link?.split(',');
    const urls = links?.map(link => {
      return {
        url: link.split(';')[0].replace('<', '').replace('>', '').trim(),
        title: link
          .split(';')[1]
          .replace('rel', '')
          .replace('="', '')
          .replace('"', '')
          .trim(),
      };
    });

    setPaginationUrls(urls);
  }
}

const TurnAnimation = keyframes`
    from { transform: rotate(-360deg); }
    to { transform: rotate(0deg); }
  `;

const Circle = styled.svg`
  animation: ${TurnAnimation} 1s ease infinite;
  height: 32px;
  width: 32px;
`;

const EmptyState = styled.p`
  padding-top: 70px;
  margin: 10px;
  text-align: center;
`;

const ErrorContainer = styled.main`
  display: grid;
  height: 70vh;
  place-items: center;
`;

const ErrorState = styled.p`
  color: crimson;
`;

const LoadingContainer = styled.main`
  grid-column: 1/-1;
  height: 70vh;
  margin: 100px;
  text-align: center;
`;

const TopicContainer = styled.section`
  background: linear-gradient(#144e74, var(--bg-color-dark), #144e74);
  border: 1px solid black;
  border-radius: 5px;
  margin: 10px 10px 0;
  padding: 5px 0;
`;
