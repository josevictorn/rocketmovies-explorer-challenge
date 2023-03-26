import styled from "styled-components";

export const Container = styled.button`
  background-color: hsla(349, 100%, 76%, 0.05);
  width: 100%;

  padding: 32px;

  border: 0;
  border-radius: 16px;

  text-align: left;

  > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 24px;
    margin-bottom: 8px;
  }
    
  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    margin-bottom: 32px;
  }
`;