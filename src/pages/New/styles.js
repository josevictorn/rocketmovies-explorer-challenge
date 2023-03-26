import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  
  main {
    overflow-y: auto;

    width: 1137px;
    margin: 40px auto;

    ::-webkit-scrollbar {
      width: 24px;
    }

    ::-webkit-scrollbar-track {
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.SALMON};
      border-radius: 20px;
      border: 8px solid transparent;
      background-clip: content-box;
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: #FD5170;
    }

  }
`;

export const Form = styled.div`
  
  > header {
    margin-bottom: 40px;

    > h1 {
      font-size: 36px;
      margin-top: 24px;
    }
  }

  > div {
    display: flex;
    gap: 40px;
    margin-bottom: 36px;
  }

  h2 {
    font-size: 20px;
    font-weight: 400;

    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  .markers {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border-radius: 8px;

    padding: 24px;

    display: flex;
    flex-wrap: wrap;

    margin-top: 24px;
  }
`;