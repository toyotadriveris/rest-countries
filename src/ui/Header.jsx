import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  position: relative;
  z-index: 1;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 5%;
  background-color: var(--elements);
  color: var(--text);
  box-shadow: 0px 4px 14px 0px #1616162e;

  button {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 4px 6px;
    font-size: 16px;
    font-weight: normal;
    outline: none;
    border: none;
    background-color: transparent;
  }
`;

function Header() {
  const { isTheme, toggleTheme } = useTheme();

  return (
    <StyledHeader>
      <Link to="home">
        <h1>Where in the world?</h1>
      </Link>

      <button style={{ color: "var(--text)" }} onClick={toggleTheme}>
        {isTheme ? <IoSunnyOutline /> : <IoMoonOutline />}
        {isTheme ? "Light mode" : "Dark mode"}
      </button>
    </StyledHeader>
  );
}

export default Header;
