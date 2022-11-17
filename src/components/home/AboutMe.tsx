import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import CompentencyCard from "./CompetencyCard";
import AboutMeQualities from "./AboutMeQualities";
import VisibilitySensor from "react-visibility-sensor";
import { motion, AnimatePresence } from "framer-motion";

type CompetencyProps = {
  competencies?: Compentencies[];
};

interface Compentencies {
  label: string;
  description: string;
  image: string;
}

const Container = styled.div`
  ${tw`flex flex-col md:flex-row justify-between`}
`;

const Wrapper = styled.div`
  ${tw`mt-20 p-4 md:(mt-0 p-20 -mb-16) flex flex-col  `}
`;

const TextWrapper = styled.div`
  ${tw`w-full md:w-3/5 content-center justify-between`}
`;

const Title = styled.p`
  ${tw`leading-tight tracking-wider text-pinkish text-xl mb-6 md:mb-10`}
  font-family: Fantasy;
`;
const Description = styled(motion.p)`
  ${tw`text-white text-lg mx-auto md:(mr-4)`}
`;
const QualityContainer = styled.div`
  ${tw`flex w-full md:w-1/3 md:place-content-center `}
`;
const HorizontalDivider = styled.div`
  ${tw`mb-10`}
`;
export const AboutMe: React.FC<CompetencyProps> = ({
  competencies,
}: CompetencyProps) => {
  const [viewPortEntered, setViewPortEntered] = useState(false);
 
  return (
    <Wrapper>
      <Title>About Me</Title>
      <Container>
        <VisibilitySensor
          active={!viewPortEntered}
          onChange={(isVisible) => {
            if (isVisible) {
              setViewPortEntered(true);
            }
          }}
        >
          <TextWrapper>
            <Description
                  initial="hidden"
                  whileInView="visible"
                  exit={{x:-100}}
                  viewport={{ once: true }}
                  transition={{ type: "spring", duration: 2, delay:0.4, damping:50 }}
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 70 },
                  }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Description>
            <HorizontalDivider />
            <Description
                  initial="hidden"
                  whileInView="visible"
                  exit={{x:-100}}
                  viewport={{ once: true }}
                  transition={{ type: "spring", duration: 2, delay:0.4, damping:50 }}
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 70 },
                  }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Description>
          </TextWrapper>
        </VisibilitySensor>
        <QualityContainer>
          <AboutMeQualities />
        </QualityContainer>
      </Container>
    </Wrapper>
  );
};
