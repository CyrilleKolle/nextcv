import React, { ReactNode } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Footer from "./footer";
import Header from "./header";

interface PageProps {
  children: ReactNode;
}

const Wrapper = styled.main`
  ${tw`flex-grow relative mt-40`}
  background-image: 'inherit';
`;
const OuterWrapper = styled.div`
  ${tw`flex flex-col`}
  background: linear-gradient(-45deg, #c5d5cb, #9fa8a3, #e3e0cf, #f6f6f8);
  animation: gradient 15s ease infinite;
  background-size: 400% 400%;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const Page: React.FC<PageProps> = (props) => {
  return (
    <>
      <OuterWrapper>
        <Header />
        <Wrapper>{props.children}</Wrapper>
        {/* <FilterMobile>Filter</FilterMobile> */}
      </OuterWrapper>
      <Footer />
    </>
  );
};
