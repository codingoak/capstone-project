import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components/macro';

import useStore, { useMyIssues, usePinnedIssues } from '../hooks/useStore';

export default function Issues({ issues }) {
  const pinnedIssues = usePinnedIssues.getState().pinnedIssues;
  const setComparedIssues = useStore.getState().setComparedIssues;
  const setMyIssues = useMyIssues.getState().setMyIssues;
  const setPinnedIssues = usePinnedIssues.getState().setPinnedIssues;
  const sortPins = useStore.getState().sortPins;

  return (
    <>
      {issues?.map(issue => {
        return (
          <Wrapper
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            initial={{ opacity: 0 }}
            key={issue.id}
            title={issue.title}
            state={issue.state}
          >
            <Link to={`/${issue.id}`}>
              <IssueTitle>{issue.title}</IssueTitle>
              <IssueState>{issue.state}</IssueState>
            </Link>
            <PinButton
              aria-label="PinButton"
              onClick={() => {
                togglePin(issue.id, issues);
              }}
            >
              {issue.isPinned ? (
                <svg
                  role="img"
                  aria-label="Pin fill"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <title>Pin</title>
                  <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146z" />
                </svg>
              ) : (
                <svg
                  role="img"
                  aria-label="Pin empty"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146zm.122 2.112v-.002.002zm0-.002v.002a.5.5 0 0 1-.122.51L6.293 6.878a.5.5 0 0 1-.511.12H5.78l-.014-.004a4.507 4.507 0 0 0-.288-.076 4.922 4.922 0 0 0-.765-.116c-.422-.028-.836.008-1.175.15l5.51 5.509c.141-.34.177-.753.149-1.175a4.924 4.924 0 0 0-.192-1.054l-.004-.013v-.001a.5.5 0 0 1 .12-.512l3.536-3.535a.5.5 0 0 1 .532-.115l.096.022c.087.017.208.034.344.034.114 0 .23-.011.343-.04L9.927 2.028c-.029.113-.04.23-.04.343a1.779 1.779 0 0 0 .062.46z" />
                </svg>
              )}
            </PinButton>
          </Wrapper>
        );
      })}
    </>
  );

  function togglePin(prevId, prevIssues) {
    // Check if id matchs
    const checkedIssues = prevIssues.map(prevIssue => {
      if (prevIssue.id === prevId) {
        return {
          ...prevIssue,
          isPinned: !prevIssue.isPinned,
        };
      } else {
        return {
          ...prevIssue,
        };
      }
    });
    sortPins(checkedIssues);

    // set to compared(fetched) or set to my issues
    if (prevIssues[0].hasOwnProperty('url')) {
      setComparedIssues(checkedIssues);
    } else {
      setMyIssues(checkedIssues);
    }

    // creates an array with all the pinned issues
    const nextIssues = [...checkedIssues, ...pinnedIssues];

    const uniqueIssues = Array.from(
      new Set(nextIssues.map(nextIssue => nextIssue.id))
    ).map(id => {
      return nextIssues.find(nextIssue => nextIssue.id === id);
    });

    const uniquePinnedIssues = uniqueIssues.filter(
      uniqueIssue => uniqueIssue.isPinned
    );

    setPinnedIssues(uniquePinnedIssues);
  }
}

const Link = styled(NavLink)`
  align-items: center;
  display: inherit;
  grid-column: 1 /4;
  grid-template-columns: 10px 1fr 52px;
  grid-template-rows: 60px;
  &:active,
  &:hover,
  &:link,
  &:visited {
    color: inherit;
    text-decoration: none;
  }
`;

const IssueState = styled.div`
  grid-column: 3;
`;

const IssueTitle = styled.p`
  grid-column: 2/3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const PinButton = styled.button`
  background: none;
  border-radius: 50%;
  border: none;
  grid-column: 4/6;
  height: 42px;
  justify-self: end;
  width: 42px;
`;

const Wrapper = styled(motion.section)`
  align-items: center;
  display: grid;
  grid-template-columns: 10px 1fr 52px 42px;
  grid-template-rows: 60px;
  margin: 0 10px;
  :nth-of-type(odd) {
    background-color: var(--bg-color-light);
    border-radius: 5px;
  }
`;
