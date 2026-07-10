import Container from "@/components/layouts/Container";
import Section from "@/components/layouts/Section";
import {
  About,
  Accent,
  Avatar,
  BrandMark,
  Featured,
  Headline,
  Toolkit,
} from "./cards";
import { BentoGrid } from "./BentoGrid";
import { Intro } from "./Intro";

export default function Profile() {
  return (
    <Section className="pt-0 sm:-mt-12 md:-mt-16 lg:-mt-20">
      <Container>
        <Intro />
        <BentoGrid>
          <BrandMark />
          <Avatar />
          <Featured />
          <About />
          <Headline />
          <Toolkit />
          <Accent />
        </BentoGrid>
      </Container>
    </Section>
  );
}
