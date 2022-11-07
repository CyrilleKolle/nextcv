import React from "react";
import tw from "twin.macro";
import styled, { css } from "styled-components";
import { Page } from "../components/layout/page";
import { PageLayout } from "../components/layout/pagelayout";
import Intro from "../components/home/Intro";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Competencies } from "../components/home/Competencies";
import { ExperienceData } from "../../utils/experiences";
import { CompetenciesData } from "../../utils/competencies";
import { EducationData } from "../../utils/education";
import { GetStaticProps } from "next";
import { Experiences } from "../components/home/Experiences";
import { Education } from "../components/home/Education";
import {AboutMe} from "../components/home/AboutMe"

type Experience = {
  image: string;
  label: string;
  startYear: number | string;
  endYear: number | string;
  location: string;
  position: string;
};

type Props = {
  items: Experience[];
};
const Home: React.FC<Props> = ({ items }: Props) => {
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

  const scaleX = useSpring(yRange, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    /*     <motion.div style={{ scaleX: scaleX }} className="progress-bar"> */
    <PageLayout title="Cyrille - Lia CV">
      <Page>
        {
          <>
            <Intro />
            <Competencies competencies={CompetenciesData}/>
            <AboutMe/>
            <Experiences experiences={ExperienceData} />
            <Education schools={EducationData}/>
          </>
        }
      </Page>
    </PageLayout>
    /*     </motion.div> */
  );
};

/* export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items:Experience[] = ExperienceData
  return { props: { items } }
} */

export default Home;
