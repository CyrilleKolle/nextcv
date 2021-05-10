import React from "react";
import tw from "twin.macro";
import styled, { css } from "styled-components";
import { Page } from "../components/layout/page";
import Intro from "../components/home/Intro";
import { SquareBox } from "../components/home/SquareBox";
import Jobs from "../components/home/Jobs";
import { Competencies } from "../components/home/Competencies";
import Divider from "../components/layout/Divider";
import Language from "../components/home/Language";
import { Title } from "../components/layout/Title";
import References from "../components/home/Refences";
import ContactBanner from "../components/Person/ContactBanner";
const Wrapper = styled.div`
  ${tw`pb-10 flex flex-col justify-center justify-items-center`}
`;

export default function Contact({ cars }) {
  return (
    <Page>
      <Wrapper>
        <ContactBanner
          bgColor={"white"}
          color={"red"}
          mail={true}
          title={"email"}
          message={"ngidekollecyrille@gmail.com"}
        />
        <ContactBanner
          bgColor={"white"}
          color={"black"}
          title={"tel"}
          tel={false}
          message={"073 766 82 28"}
        />
        <ContactBanner
          extraWord={"In"}
          bgColor={"#0077b5"}
          color={"white"}
          title={"Linked"}
          message={"https://www.linkedin.com/in/cyrille-ngide-kolle/"}
        />
        <ContactBanner
          bgColor={"white"}
          color={" #00acee"}
          title={"twitter"}
          message={"https://www.twitter.com"}
        />
        <ContactBanner
          bgColor={"#3b5998"}
          color={"white"}
          title={"facebook"}
          message={"https://www.facebook.com"}
        />
        <ContactBanner
          color={"#8a3ab9"}
          bgColor={"white"}
          title={"instagram"}
          message={"https://www.instagram.com"}
        />
      </Wrapper>
    </Page>
  );
}
