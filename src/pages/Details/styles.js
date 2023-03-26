import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const Section = styled.div`
  width: 1137px;
  margin: 40px auto 0;

  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 24px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.SALMON};
    border-radius: 20px;
    border: 8px solid transparent;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #FD5170;
  }

  .titleAndRating {
    margin-top: 24px;

    h2 {
      font-size: 36px;
      font-weight: 500;
    }
  }

  .authorAndCreatedAt {
    margin-top: 24px;

    display: flex;
    gap: 8px;

    .author {
      display: flex;
      align-items: center;
      gap: 8px;

      > img {
        height: 16px;
        width: 16px;

        border-radius: 50%;
        border-width: 2px;
        border-style: solid;
        border-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
      }
    }

    .createdAt {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }

  .tags {
    margin-top: 40px;
  }

  p {
    margin: 40px 0;
    text-align: justify;
  }
`;