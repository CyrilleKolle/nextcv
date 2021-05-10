import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {
  Facebook,
  Instagram,
  Whatsapp,
  LinkedIn,
  Twitter,
  Mail,
  Telephone,
} from "../logo";

const ServicesWrapper = styled.div`
  ${tw`flex flex-row justify-items-center content-center flex-wrap`}
`;

export const SocialIcons: React.FC = () => {
  return (
    <>
      <ServicesWrapper>
        <Facebook />
        <Instagram />
        <Whatsapp />
        <LinkedIn />
        <Twitter />
        <Mail />
        <Telephone />
      </ServicesWrapper>
    </>
  );
};
