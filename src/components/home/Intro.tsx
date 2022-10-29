import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const Wrapper = styled.div`
  ${tw`flex flex-col md:(flex-row) w-full`};

`;
const Description = styled(motion.div)`
  ${tw`md:w-2/3 flex block items-center justify-center md:(items-start justify-start)`};
`;
const DescriptionText = styled.p`
  ${tw`text-2xl p-4 sm:(p-0 text-2xl) md:(text-7xl) flex flex-wrap flex-wrap whitespace-pre-line text-softblack leading-tight`};
  font-family: Fantasy;
`;
const Img = styled.img`
  ${tw`object-fill`};
`;
const ImageDiv = styled(motion.div)`
  ${tw`md:w-1/3 content-center items-center flex justify-center md:justify-end shadow-none`}
  min-height: 300px;
  animation: 1s ease-out 0s 1 slideInFromLeft;

  @keyframes animation {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;
export default function Intro() {
  return (
    <Wrapper>
      <ImageDiv
        initial={{ opacity: 0, x: -100 }}
        exit={{ opacity: 1 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", duration: 2 }}
        variants={{
          hidden: {
            scale: 0.7,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          },
        }}
      >
        <Img src="/ai_ml.png" alt="image of bart" />
      </ImageDiv>

      <Description
        initial={{ opacity: 0, x: 200 }}
        exit={{ opacity: 1 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", duration: 2 }}
        variants={{
          hidden: {
            scale: 0.7,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          },
        }}
      >
        <DescriptionText>
          Att bli programmerare är ett av de programmerare är ett av de
        </DescriptionText>
      </Description>
    </Wrapper>
  );
}
