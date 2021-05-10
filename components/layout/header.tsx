import styled from "styled-components";
import tw from "twin.macro";
import Link from "next/link";
import { useState } from "react";
import { AppIcon, MenuIcon } from "../logo";
import { ActiveLink } from "../header/ActiveLink";
import { useRouter } from "next/router";
// const random = btoa(Math.random());
const NavLink = styled.a`
  ${tw`transition duration-500 ease-in-out transform shadow-inner md:( w-40 ) px-3 py-2 mx-2 rounded text-gray-100  font-bold items-center justify-center hover:(text-gray-500 transform scale-110 -translate-y-2 shadow-2xl bg-gray-100)`}
  background-color: rgb(0, 0, 0, 0.5);
`;

const NavContainer = styled.div`
  ${tw`md:(flex-row ml-auto w-auto items-center h-auto) w-full items-start text-center flex flex-col`}
  right: 0;
  float: right;
`;

const LogoButton = styled.button`
  ${tw`inline-flex p-3 rounded md:hidden  ml-auto hover:(text-green-200 transform scale-110 -translate-y-2 shadow-2xl bg-white)`}
  right:0;
`;

const NavBar = styled.nav`
  ${tw`flex items-center mb-3 fixed`}
  z-index: 9999;
  overflow: hidden;
  width: 90vw;
`;

export const Header: React.FC = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
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
          <LinkItem key="cv" label="CV" href="/" />
          <LinkItem key="contact" label="Kontact" href="/Contact"></LinkItem>
        </NavContainer>
      </div>
    </NavBar>
  );
};

export default Header;

const LinkItem: React.FC<{ label: string; href: string }> = ({
  label,
  href,
}) => {
  return (
    <ActiveLink href={href} passHref>
      {label}
    </ActiveLink>
  );
};
