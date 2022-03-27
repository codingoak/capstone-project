import styled from 'styled-components/macro';

import { ButtonSecondarySmall } from './Button';

export default function Pagination({ getData, paginationUrls }) {
  return (
    <Wrapper>
      {paginationUrls.map((paginationUrl, index) => {
        return (
          <ButtonSecondarySmall
            children={paginationUrl.title}
            key={paginationUrl + index}
            onClick={() => {
              getData(paginationUrl.url);
            }}
          />
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 25px auto;
  width: fit-content;
`;
