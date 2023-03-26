import styled from "styled-components";

export const Container = styled.header`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};


  display: flex;
  align-items: center;
  gap: 64px;
  flex-direction: row;
  padding: 24px 15%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  > h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.SALMON};
  }
`;

export const Profile = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  img {
    width: 64px;
    height: 64px;
    
    border-radius: 50%;
    border-width: 2px;
    border-style: solid;
    border-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    font-size: 14px;

    strong {
      white-space: nowrap;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > button {
      background: transparent;
      border: none;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;