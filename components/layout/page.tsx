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
  ${tw`flex flex-col bg-gray-300 px-20 relative`}
  min-height: 100vh - 80px;
`;

const FilterMobile = styled.button`
  ${tw`bottom-10 right-10  w-24 bg-gray-700 my-2 rounded-full py-3 px-6 text-gray-100 mx-auto md:hidden`}
  z-index: 99;
  position: -webkit-sticky;
  position: sticky;
  right: 59px;
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
