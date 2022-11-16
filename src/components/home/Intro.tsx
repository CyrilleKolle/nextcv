import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import useWindowSize from '../../../tools/useWindowSize'

type IntroProps = {
  height?: number;
}

const Wrapper = styled.div<{height?: number}>`
  ${tw`flex md:(flex-row) w-full p-4`};
  @media only screen and (max-width: 600px) {
    ${tw`hidden`};
  } 
`;
const WrapperMobile = styled.div`
${tw`w-full bg-hero bg-no-repeat bg-cover bg-scroll flex items-end justify-end`};
height: 400px;
@media only screen and (min-width: 600px) {
  ${tw`hidden`};
} 
`
const Description = styled(motion.div)`
  ${tw`p-4 md:p-0 flex block items-center justify-center`};
`;
const DescriptionText = styled.div`
  ${tw`text-2xl p-0 sm:(p-0 text-2xl) md:(text-7xl) lg:(text-8xl) flex flex-wrap flex-wrap whitespace-pre-line leading-tight`};
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
  ${tw`object-fill `};
`;
const ImageDiv = styled(motion.div)`
  ${tw`md:(w-5/12 shadow-none pl-4) content-start items-start flex justify-start`}
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
export const Intro: React.FC<IntroProps> = ({}: IntroProps) => {

  const [height, width] = useWindowSize()
  return (
    <>
    <WrapperMobile>
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
    </WrapperMobile>
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
    </>
  );
}
