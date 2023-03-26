import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  > header {
    padding: 64px 114px;

    background-color: hsla(349, 100%, 76%, 0.05);
  }
`;

export const Form = styled.form`
  max-width: 340px;

  margin: -93px auto 0;

  > div:nth-child(3) {
    margin-bottom: 24px;
  }

  > button {
    margin-top: 24px;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: 0 auto 32px;

  width: 186px;
  height: 186px;

  > img {
    height: 186px;
    width: 186px;

    border-radius: 50%;
  }

  > label {
    width: 48px;
    height: 48px;

    background-color: ${({ theme }) => theme.COLORS.SALMON};
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    right: 7px;
    bottom: 7px;

    cursor: pointer;

    > input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }
  }
`;