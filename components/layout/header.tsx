import styled from "styled-components";
import tw from "twin.macro";
import Link from "next/link";
import { useState } from "react";
import { AppIcon, MenuIcon } from "../logo";

const Wrapper = styled.div`
  ${tw`w-full fixed absolute`}
  z-index: 99;
  margin-bottom: 100px;
`;
const NavLink = styled.a`
  ${tw`transition duration-500 ease-in-out transform md:(inline-flex w-auto) w-full px-3 py-2 mx-2 rounded text-gray-600 font-bold items-center justify-center hover:(text-green-600 transform scale-110 -translate-y-2 shadow-2xl bg-white)`}
`;

const NavContainer = styled.div`
  ${tw`md:(inline-flex flex-row ml-auto w-auto items-center h-auto) w-full items-start text-right flex flex-col`}
`;

const LogoButton = styled.button`
  ${tw`inline-flex p-3 rounded md:hidden  ml-auto hover:(text-green-600 transform scale-110 -translate-y-2 shadow-2xl bg-white)`}
`;

const NavBar = styled.nav`
  ${tw`flex items-center flex-wrap mb-3`}
  overflow: hidden;
`;

function Header() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <Wrapper>
      <NavBar>
        <Link href="/">
          <AppIcon />
        </Link>

        <LogoButton onClick={handleClick}>
          <MenuIcon />
        </LogoButton>
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full md:inline-flex md:flex-grow md:w-auto`}
        >
          <NavContainer>
            <Link href="/">
              <NavLink>Home</NavLink>
            </Link>

            <Link href="/posts/first">
              <NavLink>Services</NavLink>
            </Link>

            <Link href="/carForm">
              <NavLink>About us</NavLink>
            </Link>

            <Link href="/">
              <NavLink>Contact us</NavLink>
            </Link>
          </NavContainer>
        </div>
      </NavBar>
    </Wrapper>
  );
}

export default Header;
