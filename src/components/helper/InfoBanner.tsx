import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import VisibilitySensor from "react-visibility-sensor";
import { motion, AnimatePresence } from "framer-motion";
import { SvgLayout } from "../layout/SvgLayout";

type InfoBannerProps = {
  image?: string;
  label?: string;
  index?: number;
};

const InfoContainer = styled(motion.div)`
  ${tw`flex flex-col w-screen`};
`;
const Label = styled.p`
  ${tw`text-white`};
  font-family: Fantasy;
`;

const InfoWrapper = styled(motion.div)`
  ${tw`flex flex-row`};
`;

const InfoBanner: React.FC<InfoBannerProps> = () => {
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
      <InfoContainer>
        <InfoWrapper
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
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -100 },
          }}
        >
          <SvgLayout svg="/info.svg"/>
          <Label>Website is still undergoing work. Will be completed within the coming weeks. Thanks for understanding!</Label>
        </InfoWrapper>
        );
      </InfoContainer>
    </VisibilitySensor>
  );
};
export default InfoBanner;
