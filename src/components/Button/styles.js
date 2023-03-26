import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.SALMON};

  padding: 16px 32px;

  border: 0;
  border-radius: 10px;

  display: flex;
  align-items: center;
  gap: 8px;
`;