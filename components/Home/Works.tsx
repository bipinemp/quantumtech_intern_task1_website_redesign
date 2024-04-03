import Container from "../Container";
import { MotionDiv } from "../MotionDiv";
import { WorksSlide } from "./WorksSlide";

const Works = () => {
  return (
    <Container>
      <section className="flex flex-col items-center gap-10 relative h-[600px] w-full">
        <h1 className="z-10 relative w-fit inline-block text-[2rem] md:text-[4rem] text-center font-black">
          Our Works
          <span className="absolute bottom-0 md:bottom-4 -z-10 left-0 w-full h-[15px] bg-primary"></span>
        </h1>
        <MotionDiv
          initial={{ y: 20, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 90,
            duration: 1.7,
            bounce: 0.3,
            delay: 0.5,
          }}
          className="w-full relative"
        >
          <WorksSlide />
        </MotionDiv>
      </section>
    </Container>
  );
};

export default Works;
