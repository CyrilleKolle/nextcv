import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { motion, AnimatePresence } from "framer-motion";

type EducationCardProps = {
  number?: string;
  title?: string;
  description?: string;
  location?: string;
};

const EducationCardContainer = styled(motion.div)`
  ${tw`flex flex-col justify-center content-center `};
`;
const Wrapper = styled(motion.div)`
  ${tw``};
`;
const Title = styled.p`
  ${tw`text-coal`};
`;
const Description = styled.p`
  ${tw`text-white`};
`;
const Number = styled.p`
  ${tw`text-white`};
`;
const Span = styled.span`
  ${tw`text-white font-black text-6xl`};
`;
const Location = styled.p`
  ${tw`text-white`}
`;
const EducationCard: React.FC<EducationCardProps> = ({
  number,
  title,
  description,
  location,
  ...rest
}) => {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  return (
    <EducationCardContainer
      initial="hidden"
      whileInView="visible"
      exit={{x:-100}}
      viewport={{ once: true }}
      transition={{ type: "spring", duration: 2, delay:0.1, damping:50 }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
      }}
    >
      <CountUp
        {...rest}
        start={viewPortEntered ? null : 0}
        end={parseInt(number)}
        delay={0.5}
      >
        {({ countUpRef }) => {
          return (
            <VisibilitySensor
              active={!viewPortEntered}
              onChange={(isVisible) => {
                if (isVisible) {
                  setViewPortEntered(true);
                }
              }}
            >
              <Span ref={countUpRef} />
            </VisibilitySensor>
          );
        }}
      </CountUp>

      <Title>{title}</Title>
      <Location>{location}</Location>
      <Description>{description}</Description>
    </EducationCardContainer>
  );
};
export default EducationCard;
