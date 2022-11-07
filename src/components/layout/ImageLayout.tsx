import tw from "twin.macro";
import styled from "styled-components";

type ImageContentProps = {};

const Image = styled.img`
  ${tw`mx-auto rounded-full`}/* @media only screen and (min-width: 1080px) {
    height: 400px;
  } */
`;

export const ImageLayout: React.FC<ImageContentProps> = (props) => {
  return (
    <>
        <Image src="/ngide.png" alt="Picture of the author" />
    </>
  );
};
