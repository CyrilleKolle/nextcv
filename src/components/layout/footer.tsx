import styled from "styled-components";
import tw from "twin.macro";

const FooterWrapper = styled.div`
  ${tw``}
`;
const MobileFooter = styled.div`
  ${tw`flex flex-col justify-between  p-4`}
  @media only screen and (min-width: 600px) {
    ${tw`hidden`};
  }
`;
const DesktopFooter = styled.div`
  ${tw`flex flex-row justify-around  p-20 w-auto`}
  @media only screen and (max-width: 600px) {
    ${tw`hidden`};
  }
`;
const FooterText = styled.p`
  ${tw`text-white text-lg mt-10`}
`;
const HorizontalDivider = styled.div`
  ${tw`border border-coal mx-2`}
`;
const Telephone = styled.a`
  ${tw`text-white text-lg mx-4`}
`;
const Email = styled.a`
  ${tw`text-white text-lg mx-4`}
`;

const ContactWrapper = styled.div`
  ${tw`flex flex-col`}
`;
const VerticalDivider = styled.div`
  ${tw`h-1 bg-coal my-6`}
`;
const TitleText = styled.p`
  ${tw`text-white`}
  color: #234F1E
`;
const InfoContainer = styled.div`
  ${tw`flex flex-row`}
`;
function Footer() {
  return (
    <>
      <FooterWrapper>
        <MobileFooter>
          <FooterText>
            If you are still not sure if to hire me,
            <br /> Please kindly reach so i can win you over
          </FooterText>
          <VerticalDivider />
          <ContactWrapper>
            <InfoContainer>
              <TitleText>Tel: </TitleText>
              <Telephone href="tel:0737668228">+46 737668228</Telephone>
            </InfoContainer>
            <InfoContainer>
              {" "}
              <TitleText>Email: </TitleText>
              <Email href="mailto: ngidekollecyrille@gmail.com">
                ngidekollecyrille@gmail
              </Email>
            </InfoContainer>
          </ContactWrapper>
        </MobileFooter>
        <DesktopFooter>
          <FooterText>
            If you are still not sure if to hire me,
            <br /> Please kindly reach out,
            <br /> so i can win you over!
          </FooterText>
          <HorizontalDivider />
          <ContactWrapper>
            <InfoContainer>
              <TitleText>Tel: </TitleText>
              <Telephone href="tel:0737668228">+46 737668228</Telephone>
            </InfoContainer>
            <InfoContainer>
              {" "}
              <TitleText>Email: </TitleText>
              <Email href="mailto: ngidekollecyrille@gmail.com">
                ngidekollecyrille@gmail
              </Email>
            </InfoContainer>
          </ContactWrapper>
        </DesktopFooter>
      </FooterWrapper>
    </>
  );
}

export default Footer;
