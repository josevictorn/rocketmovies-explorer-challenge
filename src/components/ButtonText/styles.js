import styled from "styled-components";

export const Container = styled.button`
  background: transparent;
  border: 0;

  color: ${({ theme }) => theme.COLORS.SALMON};

  display: flex;
  align-items: center;
  gap: 8px;
`;