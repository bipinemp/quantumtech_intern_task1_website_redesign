import Container from "../Container";
import { StepsList } from "@/lib/lists";
import { MotionDiv } from "../MotionDiv";

const Steps = () => {
  return (
    <Container>
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
          delay: 0.1,
        }}
        className="mt-0 mb-10 sm:my-20 flex flex-col gap-10"
      >
        <div className="flex flex-col gap-1">
          <h2 className="font-black llg:text-start text-center text-primary text-[1.2rem]">
            STEPS
          </h2>
          <h1 className="underline llg:no-underline leading-10 llg:leading-normal relative text-center inline-block w-fit font-black opacity-80 text-[1.5rem] llg:text-[2.2rem]">
            Take some easy steps for processing
            <span className="hidden llg:absolute llg:block bottom-2 -z-10 left-0 w-full h-[10px] bg-primary"></span>
          </h1>
        </div>
        <div className="flex llg:flex-row flex-col items-center">
          {StepsList.map((step, i) => (
            <>
              {i > 0 && StepsList.length !== i && (
                <div
                  key={i}
                  className="llg:w-[50px] h-[50px] llg:h-0 border-l-[3px] border-l-primary llg:border-b-[3px] border-b-primary border-dashed"
                ></div>
              )}

              <div
                key={i}
                className="relative shadow-lg flex size-[160px] llg:size-[200px] flex-col items-center justify-center gap-3 p-3 bg-primary rounded-full"
              >
                <h2 className="text-[1.2rem] llg:text-[1.5rem] absolute top-0 left-0 py-2 px-3 rounded-full shadow bg-blue-500 text-background font-black">
                  0{i + 1}
                </h2>
                <span className="animate-ping absolute inline-flex size-[117px] -z-10 rounded-full bg-primary/80 opacity-75"></span>
                <step.icon className="size-8 llg:size-12 text-background" />
                <p className="text-[0.7rem] llg:text-[1rem] text-center text-background font-semibold tracking-wider">
                  {step.name}
                </p>
              </div>
            </>
          ))}
        </div>
      </MotionDiv>
    </Container>
  );
};

export default Steps;
