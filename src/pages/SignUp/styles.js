import styled from "styled-components";

import backgroundImg from '../../assets/background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 134px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    color: ${({ theme }) => theme.COLORS.SALMON};
    font-size: 48px;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 14px;
  }

  > h2 {
    margin: 48px 0;
  }

  > button {
    margin-top: 24px;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    
    margin-top: 48px;
    color: ${({ theme }) => theme.COLORS.SALMON};
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;