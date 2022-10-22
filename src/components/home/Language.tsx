import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import StarRatingComponent from "react-star-rating-component";

type LanguageProps = {
  title?: string;
  speak?: string;
  write?: string;
  starValue1?: number;
  starValue2?: number;
};
const Title = styled.div`
  ${tw`text-xl font-extralight text-gray-900`}
`;
const Write = styled.div`
  ${tw`text-xl font-extralight text-gray-900`}
`;
const Speak = styled.div`
  ${tw`md:text-xl font-extralight text-gray-900 text-base`}
`;

const Wrapper = styled.div`
  ${tw`px-2 bg-gray-500 h-56 rounded-xl flex flex-wrap content-center justify-evenly shadow-2xl shadow-inner mb-10 font-extralight `}
  width: 32%;

`;
const Container = styled.div`
  ${tw`flex flex-col`}

  p {
    ${tw`underline mb-2 font-semibold text-base `}
  }
`;
const Divider = styled.div`
  ${tw`h-12 w-1 bg-gray-300 mx-2 hidden md:block`}
`;
export const Language: React.FC<LanguageProps> = ({
  title,
  write,
  speak,
  starValue1,
  starValue2,
}) => {
  return (
    <Wrapper>
      <Container>
        <p>Språk</p>
        <Title>{title}</Title>
      </Container>
      <Divider />
      <Container>
        <p>Skriver</p>
        <Write>{write}</Write>
      </Container>
      <Divider />
      <Container>
        <p>Talar</p>
        <Speak>{speak}</Speak>
      </Container>
      <Divider />
      <Container>
        <p>Rating</p>
        <StarRatingComponent
          name="rate1"
          starCount={5}
          value={starValue2}
          editing={false}
        />
      </Container>
    </Wrapper>
  );
};

export default Language;
