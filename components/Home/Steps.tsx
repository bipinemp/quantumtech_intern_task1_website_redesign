import { Lightbulb, Palette, Code, Rocket } from "lucide-react";
import Container from "../Container";

const StepsList = [
  { name: "Analysis and Investage", icon: Lightbulb },
  { name: "Wireframe and Design", icon: Palette },
  { name: "Development and Integration", icon: Code },
  { name: "Testing and Deployment", icon: Rocket },
];

const Steps = () => {
  return (
    <Container>
      <section className="my-20 flex flex-col gap-10">
        <div className="flex flex-col gap-1">
          <h2 className="font-black text-primary text-[1.2rem]">STEPS</h2>
          <h1 className="relative inline-block w-fit font-black opacity-80 text-[2.2rem]">
            Take some easy steps for processing
            <span className="absolute bottom-2 -z-10 left-0 w-full h-[10px] bg-primary"></span>
          </h1>
        </div>
        <div className="flex items-center">
          {StepsList.map((step, i) => (
            <>
              {i > 0 && StepsList.length !== i && (
                <div className="w-[50px] border-b-[3px] border-b-primary border-dashed"></div>
              )}

              <div
                key={i}
                className="relative shadow-lg flex w-[170px] h-[170px] flex-col items-center justify-center gap-3 p-3 bg-primary rounded-full"
              >
                <h2 className="absolute top-0 left-0 py-2 px-3 rounded-full bg-blue-500 text-background font-black">
                  0{i + 1}
                </h2>
                <span className="animate-ping absolute inline-flex size-[110px] -z-10 rounded-full bg-primary/80 opacity-75"></span>
                <step.icon className="size-12 text-background" />
                <p className="text-[1rem] text-center text-background font-semibold tracking-wider">
                  {step.name}
                </p>
              </div>
            </>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Steps;
