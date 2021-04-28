import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 12px 4px 4px 16px;
  background-color: white;
  color: black;
`;

export const LogoContainer = styled.div`
  .MuiSvgIcon-root {
    color: #e60023;
    font-size: 32px;
    cursor: pointer;
  }
`;

export const HeaderButton = styled.div`
  display: flex;
  height: 48px;
  min-width: 123px;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  cursor: pointer;
`;

export const HomePageButton = styled(HeaderButton)`
  background-color: rgb(17, 17, 17);

  a {
    color: white;
    text-decoration: none;
    font-weight: 700;
  }
`;

export const FollowingButton = styled(HeaderButton)`
  background-color: white;

  a {
    color: black;
    text-decoration: none;
    font-weight: 700;
  }

  :hover {
    background-color: #e1e1e1;
  }
`;

export const SearchContainer = styled.div`
  flex: 1;
`;

export const SearchBar = styled.div`
  background-color: #efefef;
  display:flex;
  height: 48px;
  width: 100%;
  border-radius: 50px;
  border: none;
  padding-left: 10px;

  form {
    display: flex;
    flex: 1;
  }

  form > input {
    background-color: transparent;
    outline: 0;
    border: none;
    width: 100%;
    margin-left: 5px;
    font-size: 16px;
  }

  form > button {
    display: none;
  }

  `;

export const IconsContainer = styled.div``;
