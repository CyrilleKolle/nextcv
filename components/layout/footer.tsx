import styled from "styled-components";
import tw from "twin.macro";
import { Address, Services, SocialIcons } from "./../footer";

const FooterWrapper = styled.div`
  ${tw`flex flex-row justify-evenly border-t-2 border-green-600 w-full bg-gray-300 w-screen`}
`;
function Footer() {
  return (
    <>
      <FooterWrapper>
        <Address />
        <SocialIcons />
        <Services />
      </FooterWrapper>
    </>
  );
}

export default Footer;
