import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const Wrapper = styled.div`
  ${tw`flex flex-col md:(flex-row) w-full`};
`;
const Description = styled(motion.div)`
  ${tw` flex block items-center justify-center md:() lg:()`};
`;
const DescriptionText = styled.div`
  ${tw`text-2xl p-4 sm:(p-0 text-2xl) md:(text-7xl) lg:(text-8xl) flex flex-wrap flex-wrap whitespace-pre-line leading-tight`};
  font-family: Fantasy;
  background:linear-gradient(-60deg, #96DFD8, #85D4BE, #AEE6CB, #397D54, #5D6E1E, #235d3A);
  animation: gradient 15s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
const Img = styled.img`
  ${tw`object-fill`};
`;
const ImageDiv = styled(motion.div)`
  ${tw`md:w-5/12 content-center items-center flex justify-center md: shadow-none`}
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
        <DescriptionText>Att bli </DescriptionText>
        <DescriptionText>programmerare</DescriptionText>
        <DescriptionText>är ett av de</DescriptionText>
        <DescriptionText>programmerare</DescriptionText>
        <DescriptionText>är ett av de</DescriptionText>
      </Description>
    </Wrapper>
  );
}
