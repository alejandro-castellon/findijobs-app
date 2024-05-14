import Navbar from "@/components/global/navbar";
import { ContainerScroll } from "@/components/global/container-scroll-animation";
import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards";
import { LampComponent } from "@/components/global/lamp";
import { AuroraBackground } from "@/components/global/aurora-background";
import { Button } from "@/components/ui/button";
import { clients } from "@/utils/images";

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col">
      <Navbar />
      <section className="md:mt-[8rem]">
        <h1 className="text-5xl md:text-7xl bg-clip-text">
          Create Your Professional Resume Easily
        </h1>
      </section>
      <section className="h-screen w-full rounded-md  !overflow-visible relative flex flex-col items-center  antialiased">
        <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
          <ContainerScroll
            titleComponent={
              <div className="flex items-center flex-col">
                <Button
                  size={"lg"}
                  className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">
                    Create my Resume
                  </span>
                </Button>
                <h1 className="text-5xl md:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                  Generate your Resume with FindiJobs
                </h1>
              </div>
            }
          />
        </div>
      </section>
      <InfiniteMovingCards
        className="md:mt-[10rem] mt-[-100px]"
        items={clients}
        direction="right"
        speed="slow"
      />
      <section className="md:mt-[5rem]">
        <LampComponent />
      </section>
    </main>
  );
}
