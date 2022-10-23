import styled from "styled-components";
import tw from "twin.macro";
import Link from "next/link";
import { useState } from "react";
import { ActiveLink } from "../header/ActiveLink";

const NavLink = styled.a`
  ${tw`transition duration-500 ease-in-out transform shadow-inner md:( w-40 ) px-3 py-2 mx-2 rounded text-gray-100  font-bold items-center justify-center hover:(text-gray-500 transform scale-110 -translate-y-2 shadow-2xl bg-gray-100)`}
  background-color: rgb(0, 0, 0, 0.5);
`;

const NavContainer = styled.div`
  ${tw`hidden md:(flex flex-row overflow-auto w-2/3 place-content-end content-center items-center h-20) lg:(mr-8)`}
`;

const LogoButton = styled.button`
  ${tw`inline-flex p-3 rounded md:hidden  ml-auto `}
  right:0;
`;

const NavBar = styled.nav`
  ${tw`flex justify-between w-full place-content-center h-auto`}
`;

const NameHeader = styled.div`
  ${tw`w-full md:(w-1/3 h-40 place-content-center place-items-center flex drop-shadow-2xl rounded-r-sm)`}
  background-color: #151615
`;

const NameText = styled.p`
  ${tw`text-white mx-auto text-3xl`}
`;

export const Header: React.FC = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <NavBar>
      {/*    <Link href="/">
        <AppIcon />
      </Link>

      <LogoButton onClick={handleClick}>
        <MenuIcon />
      </LogoButton> */}
      <div className={`${active ? "" : "hidden"} w-full md:hidden`}></div>
      <NameHeader>
        <NameText>Cyrille Lia-Search</NameText>
      </NameHeader>
      <NavContainer>
        <LinkItem key="Education" label="Home" href="/"/>
        <LinkItem
          key="Experience"
          label="Experience"
          href="/Contact"
          
        ></LinkItem>
        <LinkItem key="contact" label="Competencies" href="/Contact"></LinkItem>
        <LinkItem key="contact" label="Kontact" href="/Contact" hasBgdColor={true}></LinkItem>
      </NavContainer>
    </NavBar>
  );
};

export default Header;

const LinkItem: React.FC<{
  label: string;
  href: string;
  hasBgdColor?: boolean;
}> = ({ label, href, hasBgdColor: hasBgdColor }) => {
  return (
    <ActiveLink href={href} passHref hasBgdColor={hasBgdColor}>
      {label}
    </ActiveLink>
  );
};
