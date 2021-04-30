import { IconButton } from "@material-ui/core";
import {
  Face,
  KeyboardArrowDown,
  Notifications,
  Pinterest,
  Search,
  Textsms,
} from "@material-ui/icons";
import React, { useState } from "react";
import {
  HeaderContainer,
  LogoContainer,
  HomePageButton,
  FollowingButton,
  SearchContainer,
  SearchBar,
  IconsContainer,
} from "./styles";

function Header({ onSubmit }) {

  const [input, setInput] = useState("")

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(input)
    setInput("")
  }

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
            <input value={input} type="text" placeholder="Search..." onChange={(e)=> {setInput(e.target.value)}} />
            <button type="submit" onClick={handleSubmit}></button>
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
