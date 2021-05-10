import { withRouter, NextRouter } from "next/router";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Fire from "../header/Fire";
interface NavLinkProps {
  href: string;
  children: string;
  prefetch?: boolean;
  passHref?: boolean;
  router: NextRouter;
  textColor?: boolean;
}

const Wrapper = styled.a<{ active: boolean }>`
  ${tw`transition duration-500 ease-in-out transform shadow-inner md:( w-40 ) px-3 py-2 mx-2 rounded text-gray-100  font-bold items-center justify-center hover:(text-gray-500 transform scale-110 -translate-y-2 shadow-2xl bg-gray-100) flex flex-row`}
  background-color: rgb(0, 0, 0, 0.5);
  ${({ active }) => active && tw``};
  text-decoration: none;
  transition: color 0.2s;
`;

export const ActiveLink = withRouter<NavLinkProps>(
  ({ children, router, ...rest }) => {
    router.route = router.route.replace(/[\/][\[][a-z]*[\]]/, "");
    const active: boolean = router ? router.route === rest.href : false;
    return (
      <Link {...rest}>
        <Wrapper active={active}>
          {active && <Fire />}
          {children}
        </Wrapper>
      </Link>
    );
  }
);
