import { useEffect, useState } from 'react';

import styled from 'styled-components/macro';

export default function TopicOverview({ selectedProject }) {
  const [openIssues, setOpenIssues] = useState();
  const str = selectedProject;
  const regex = /\/issues/;
  const url = str.replace(regex, '?q=issues');

  useEffect(() => {
    getOpenIssues(url);
  }, [url]);

  return (
    <Wrapper>
      <IconContainer>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Exclamation mark"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <title>Exclamation mark</title>
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
        </svg>
      </IconContainer>
      {openIssues} open issues
    </Wrapper>
  );

  async function getOpenIssues(url) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setOpenIssues(data.open_issues);
      } else {
        throw new Error('Response not ok');
      }
    } catch (error) {
      console.error(error);
    }
  }
}

const IconContainer = styled.div`
  margin: 1px 5px 0 0;
`;

const Wrapper = styled.div`
  color: var(--font-color-light);
  display: flex;
  margin: 12px 22px 3px;
`;
