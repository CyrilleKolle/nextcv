import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";

type PageProps = {};

const Wrapper = styled.div`
  ${tw`flex flex-row min-h-screen md:p-8 w-full place-content-evenly  overflow-auto`}
  background-color: #18191a;
  position: fixed;
  overflow-y: hidden;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Layout: React.FC<PageProps> = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};
export default Layout;
