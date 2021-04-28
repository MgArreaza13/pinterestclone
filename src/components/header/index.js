import { IconButton } from "@material-ui/core";
import {
  Face,
  KeyboardArrowDown,
  Notifications,
  Pinterest,
  Search,
  Textsms,
} from "@material-ui/icons";
import React from "react";
import {
  HeaderContainer,
  LogoContainer,
  HomePageButton,
  FollowingButton,
  SearchContainer,
  SearchBar,
  IconsContainer,
} from "./styles";

function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <IconButton>
          <Pinterest />
        </IconButton>
      </LogoContainer>
      <HomePageButton>
        <a href="/">Homepage</a>
      </HomePageButton>
      <FollowingButton>
        <a href="/">Following</a>
      </FollowingButton>
      <SearchContainer>
        <SearchBar>
          <IconButton>
            <Search />
          </IconButton>
          <form>
            <input type="text" placeholder="Search..." />
            <button type="submit"></button>
          </form>
        </SearchBar>
      </SearchContainer>
      <IconsContainer>
        <IconButton>
          <Notifications />
        </IconButton>
        <IconButton>
          <Textsms />
        </IconButton>
        <IconButton>
          <Face />
        </IconButton>
        <IconButton>
          <KeyboardArrowDown />
        </IconButton>
      </IconsContainer>
    </HeaderContainer>
  );
}

export default Header;
