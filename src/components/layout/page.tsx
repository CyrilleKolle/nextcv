import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Footer from "./footer";
import Header from "./header";

interface PageProps {}

const Wrapper = styled.main`
  ${tw`flex-grow relative mt-40`}
  background-image: 'inherit';
`;
const OuterWrapper = styled.div`
  ${tw`flex flex-col 	bg-gradient-to-r from-indigo-500`}
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
