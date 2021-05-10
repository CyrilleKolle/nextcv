import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

const LetterWrapper = styled.div`
  ${tw` w-full min-h-screen flex flex-wrap content-center mx-auto shadow px-20`}
  P {
    ${tw`text-xl leading-loose`}
  }
`;

export const Letter: React.FC = () => {
  return (
    <LetterWrapper>
      <p>
        <p>PERSONLIG BREV </p>
        <p>Namn: Ngide Kolle,</p>
        <p>Cyrille Adress: Förlandavägen 867</p>
        <p>Postnummer och stad: 43975, Fjärås</p>
        <p>Mobil: 0737668228</p>
        <p>E-post:ngidekollecyrille@gmail.com</p>
        Det är med stort intresse jag söker jobb hos er för att kunna starta ett
        nytt kapitel och äventyr hos er. Jag har en kandidatexamen som revisor
        (Bsc in Accounting) från universitetet i Buea Kamerun. Där läste jag
        kurser så som revidering, redovisning, statistiks, lager och computer
        science bl.a. Mina arbetserfarenheter sträcker sig från att vara
        bartender (2012-2013) till att jobba som revisor (2013-2015) på
        sjukhuset Saint Albert Buea. Som Bartender fick jag arbete under
        oregelbundna tider och stressiga situationer, här fick jag lära mig hur
        man bemöter och ger gästerna den bästa servicen, hur man hantera de
        klagomål och fick en sur min till att bli ett leende och hur man på
        bästa sätt jobbar som ett team för att nå sina gemensamma mål. Under
        mina år på sjukhuset fick jag lära mig att noggrannhet och tålamod är
        nyckeln till en lyckad dag. Här var jag ensam ansvarig över bokföringen,
        inventeringarna, inköpen av sjukhusmaterial och förhandlingar av ny
        sjukhusutrustning, personalens scheman osv.Med andra ord vill jag säga
        att jag inte har svårt att hålla flera bollar i luften utan njuter
        snarare desto mer saker jag kan hålla mig sysselsatt med och har därför
        inga svårigheter att jobba självständigt om så behövs. Jag skulle själv
        säga att jag är en driven person som alltid ser det positiva i saker och
        har ett högt engagemang till saker som händer runt omkring mig och tar
        aldrig ett nej. Under mina år i Sverige hag jag inte kunnat varken jobba
        eller studera då jag var tvungen att vänta på mitt uppehållstillstånd
        för att kunna bo med min familj. Men under denna tid bestämde jag mig
        för att vända det negativa till det positiva och lärde mig svenska på
        egen hand. Jag tog även vara på tiden genom att ta online kurser/examen
        på Supply Chain management, Project Management och Six Sigma in Supply
        Chain Management. Som ni kan förstår så är jag flexibel, pålitlig,
        anpassningsbar, ambitiös och är den som inte är rädd till att ta
        initiativ både privat och i arbetslivet. Människor runt omkring mig
        säger även att jag har en bra ledarskapsförmåga, bra kommunikation
        kompetens och bra tidshantering. Kvalitéer jag tror att jag med säkerhet
        kommer att gynna er som företag när ni anställer mig, då vi tillsammans
        kan börja arbete mot ett gemensamt mål.
      </p>
    </LetterWrapper>
  );
};
