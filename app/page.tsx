import Container from "@/components/common/Container";
import CTA from "@/components/landing/CTA";
import Github from "@/components/landing/Github";
import Hero from "@/components/landing/Hero";
import Model from "@/components/landing/Model"
import Projects from "@/components/landing/Projects";


export default function Page() {
  return (
    <Container className="h-full w-full py-16">
      <Model/>
     
      <Hero />
      <Github/>
      <Projects/>
      <CTA/>
    </Container>
  );
}