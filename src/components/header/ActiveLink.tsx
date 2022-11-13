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
  ${tw`transition duration-500 ease-in-out transform text-black p-7 items-center my-auto justify-center leading-tight tracking-wider lg:(mx-2) hover:(text-pantone rounded)`}
  ${({ active }) => active && tw`text-coal font-thin line-through text-sm lowercase`};
  background-color: ${(props) => props.hasBgdColor && "#375778"};
  color: ${(props) => (props.hasBgdColor ? "#C39EA0" : "#C39EA0")};
  transition: color 0.2s;
  font-family: Fantasy;
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
