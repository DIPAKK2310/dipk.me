import Container from "@/components/common/Container";
import CTA from "@/components/landing/CTA";
import Github from "@/components/landing/Github";
import Hero from "@/components/landing/Hero";
import Model from "@/components/landing/Model";
import Projects from "@/components/landing/Projects";
import Blog from "@/components/landing/Blog";
import Experience from "@/components/landing/Experience";


export default function Page() {
  return (
    <>
      {/* <Model/> */}
    <Container className="h-full w-full py-16">
      
      <Hero />
      <Experience/>
      <Github/>
      <Projects/>
      <Blog/>
      <CTA/>
    </Container>
    </>
  );
}