import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor"


type EducationCardProps = {
  number?: string;
  title?: string;
  description?: string;
  location?: string;
};

const EducationCardContainer = styled.div`
  ${tw`flex flex-row md:flex-col justify-center content-center my-5`};
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
  ${tw`text-white`};
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
    <EducationCardContainer>
      <CountUp {...rest} start={viewPortEntered ? null : 0} end={parseInt(number)} delay={1}>
        {({ countUpRef }) => {
          return(
            <VisibilitySensor
            active={!viewPortEntered}
            onChange={isVisible => {
              if (isVisible) {
                setViewPortEntered(true)
              }
            }}
            >
          
            <Span ref={countUpRef} />
      
          </VisibilitySensor>
        )}}
      </CountUp>

      <Title>{title}</Title>
      <Location>{location}</Location>
      <Description>{description}</Description>
    </EducationCardContainer>
  );
};
export default EducationCard;
