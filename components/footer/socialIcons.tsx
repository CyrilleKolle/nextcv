import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Facebook, Instagram, Whatsapp } from "../logo";

const ServicesWrapper = styled.div`
  ${tw`flex flex-row p-2 right-0`}
`;

export const SocialIcons: React.FC = () => {
  return (
    <>
      <ServicesWrapper>
        <Facebook />
        <Instagram/>
        <Whatsapp/>
      </ServicesWrapper>
    </>
  );
};
