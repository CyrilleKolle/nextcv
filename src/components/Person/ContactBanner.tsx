import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

interface ContactBannerProps {
  icon?: any;
  title?: string;
  message?: string;
  mail?: boolean;
  color?: string;
  bgColor?: string;
  fontFamily?: string;
  extraWord?: string;
  ig?: boolean;
  tel?: boolean;
}

const Wrapper = styled.div`
  ${tw`flex flex-row h-full w-full mb-20`};
`;
const BlueBannerWrapper = styled.div`
  ${tw`h-32 w-2/3 bg-coal rounded-xl mx-auto relative`}
`;
const GrayMiniBanner = styled.div`
  ${tw`h-16 rounded-xl bg-gray-100 shadow-2xl w-4/5 shadow-inner right-0 float-right self-end absolute bottom-0 flex justify-center justify-items-center content-center flex-wrap rounded-bl-sm rounded-tr-sm`}
`;
const ContactLink = styled.a`
  ${tw`text-2xl text-gray-500 hover:text-red-500 mx-auto`}
`;
const TitleContainer = styled.div<{
  color?: string;
  bgColor?: string;
  fontFamily?: string;
  ig?: boolean;
}>`
  ${tw`w-20 h-20 rounded-full bg-gray-500 ml-3 mt-3 flex justify-center justify-items-center content-center flex-wrap`}
  background-color: ${(props) => props.bgColor};
  p {
    ${tw``}
    color: ${(props) => props.color};

    font-family: ${(props) => props.fontFamily};
  }
`;
const ExtraText = styled.span`
  ${tw`text-gray-900 font-extrabold`};
`;

const ContactBanner: React.FC<ContactBannerProps> = ({
  title,
  message,
  mail = false,
  color,
  bgColor,
  fontFamily,
  extraWord,
  ig,
  tel = false,
}) => {
  return (
    <Wrapper>
      <BlueBannerWrapper>
        <TitleContainer
          bgColor={bgColor}
          color={color}
          fontFamily={fontFamily}
          ig={ig}
        >
          <p>
            {title}
            <ExtraText>{extraWord}</ExtraText>
          </p>
        </TitleContainer>
        <GrayMiniBanner>
          <ContactLink
            href={
              mail ? (tel ? `tel:+46${message}` : `mailto:${message}`) : message
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            {message}
          </ContactLink>
        </GrayMiniBanner>
      </BlueBannerWrapper>
    </Wrapper>
  );
};

export default ContactBanner;
