import { withRouter, NextRouter } from "next/router";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Fire from "./Fire";
interface NavLinkProps {
  href: string;
  children: string;
  prefetch?: boolean;
  passHref?: boolean;
  router: NextRouter;
  bgColor?: boolean;
  hasBgdColor?: boolean;
}

const Wrapper = styled.a<{ active: boolean; hasBgdColor: boolean }>`
  ${tw`transition duration-500 ease-in-out transform text-black p-7 font-bold items-center my-auto justify-center lg:(mx-2 )`}
  ${({ active }) => active && tw`underline`}; 
  background-color: ${(props) =>
    props.hasBgdColor && "#375778"};
  color:  ${(props) =>
    props.hasBgdColor? "#FA255E" : "#090A0A"};
  transition: color 0.2s;
  
`;

export const ActiveLink = withRouter<NavLinkProps>(
  ({ children, router, ...rest }) => {
    router.route = router.route.replace(/[\/][\[][a-z]*[\]]/, "");
    const active: boolean = router ? router.route === rest.href : false;
    return (
      <Link {...rest}>
        <Wrapper active={active} hasBgdColor={rest.hasBgdColor}>
          {active}
          {children}
        </Wrapper>
      </Link>
    );
  }
);
