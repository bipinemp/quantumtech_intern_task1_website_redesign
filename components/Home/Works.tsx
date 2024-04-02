import Container from "../Container";
import { WorksSlide } from "./WorksSlide";

const Works = () => {
  return (
    <Container>
      <section className="flex flex-col items-center gap-10 relative h-[600px] w-full">
        <h1 className="z-10 relative w-fit inline-block text-[2rem] md:text-[4rem] text-center font-black">
          Our Works
          <span className="absolute bottom-0 md:bottom-4 -z-10 left-0 w-full h-[15px] bg-primary"></span>
        </h1>
        <div className="w-full relative">
          <WorksSlide />
        </div>
      </section>
    </Container>
  );
};

export default Works;
