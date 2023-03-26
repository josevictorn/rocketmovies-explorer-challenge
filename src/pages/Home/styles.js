import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const Section = styled.div`
  max-width: 1137px;
  margin: 48px 15%;

  overflow-y: auto;

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

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;

    > h2 {
      font-weight: 400;
      font-size: 32px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 48px;

  display: flex;
  flex-direction: column;
  gap: 24px;
`;