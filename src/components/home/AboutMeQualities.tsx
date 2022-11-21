import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import VisibilitySensor from "react-visibility-sensor";
import { motion, AnimatePresence } from "framer-motion";

type QualityProps = {
  image?: string;
  label?: string;
  index?: number;
};

const QualityContainer = styled(motion.div)`
  ${tw`flex flex-col w-screen`};
`;
const Label = styled.p`
  ${tw`text-white `};
  font-family: Fantasy;
`;
const NumberLabel = styled.p`
  ${tw`text-white `};
  font-family: Fantasy;
`;
const QualityWrapper = styled(motion.div)`
  ${tw`flex flex-row justify-self-end`};
`;
const NumberContainer = styled.div`
  ${tw`bg-coal p-6 md:p-4 mb-1 mx-1`};
`;
const LabelContainer = styled.div`
  ${tw`bg-coal p-6 md:p-4 mb-1 w-full md:w-5/6`};
`;

const AboutMeQualities: React.FC<QualityProps> = ({ image, label }) => {
  const qualities = [
    "Team Player",
    "Consistent",
    "Flexible",
    "Independent",
    "Leader",
    "Respectful"
  ];
  const [viewPortEntered, setViewPortEntered] = useState(false);

  return (
    <VisibilitySensor
      active={!viewPortEntered}
      onChange={(isVisible) => {
        if (isVisible) {
          setViewPortEntered(true);
        }
      }}
    >
      <QualityContainer>
        {qualities.map((g, index) => {
          return (
            <QualityWrapper
              initial="hidden"
              whileInView="visible"
              exit={{ x: -100 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                duration: 2,
                delay: 0.4,
                damping: 50,
              }}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -100 },
              }}
            >
              <NumberContainer>
                <NumberLabel>{index + 1}</NumberLabel>
              </NumberContainer>
              <LabelContainer>
                <Label>{g}</Label>
              </LabelContainer>
            </QualityWrapper>
          );
        })}
      </QualityContainer>
    </VisibilitySensor>
  );
};
export default AboutMeQualities;
