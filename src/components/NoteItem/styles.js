import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};

  border-radius: 10px;
  padding-right: 16px;

  > input {
    height: 56px;

    padding: 16px;

    background: transparent;
    border: none;

    color: ${({ theme }) => theme.COLORS.WHITE};

    &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > button {
    background: transparent;
    border: none;

    color: ${({ theme }) => theme.COLORS.SALMON};
  }
`;