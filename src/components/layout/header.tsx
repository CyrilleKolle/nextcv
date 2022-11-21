import styled from "styled-components";
import tw from "twin.macro";
import Link from "next/link";
import { useState } from "react";
import { ActiveLink } from "../header/ActiveLink";
import { MobileMenu } from "../header/MobileMenu";

const NavContainer = styled.div`
  ${tw`hidden md:(flex flex-row overflow-auto w-2/3 place-content-end content-center items-center h-20) lg:(mr-8)`};
`;

const NavBar = styled.nav`
  ${tw`flex justify-between w-full place-content-center h-auto`};
`;

const NameHeader = styled.div`
  ${tw`w-full md:(w-1/3 h-20 place-content-start content-start place-items-start flex drop-shadow-2xl rounded-r-sm)`};
  color: "#C39EA0";
`;

const NameText = styled.p`
  ${tw`text-3xl px-4 md:(px-12 mt-2 text-5xl) text-pinkish`}
  font-family: Fantasy;
`;

export const Header: React.FC = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
    <MobileMenu/>
    <NavBar>
      <div className={`${active ? "" : "hidden"} w-full md:hidden`}></div>
      <NameHeader>
        <NameText>Cyrille K.</NameText>
      </NameHeader>
      <NavContainer>
        <LinkItem key="Education" label="Home" href="/" />
        <LinkItem key="Portfolio" label="Portfolio" href="/Portfolio" />
        <LinkItem
          key="contact"
          label="Kontact"
          href="/Contact"
          hasBgdColor={true}
        />
      </NavContainer>
    </NavBar>
    </>
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
