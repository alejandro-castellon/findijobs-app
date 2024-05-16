import Navbar from "@/components/global/navbar";
import { ContainerScroll } from "@/components/global/container-scroll-animation";
import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards";
import { Button } from "@/components/ui/button";
import { clients } from "@/utils/images";

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col">
      <Navbar />
      <section className="w-full rounded-md !overflow-visible relative flex flex-col items-center  antialiased">
        <ContainerScroll
          titleComponent={
            <div className="flex items-center flex-col">
              <h1 className="text-5xl md:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                Generate your Resume with FindiJobs
              </h1>
              <span className="text-5xl md:text-2xl  bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                Create Your Professional Resume Easily
              </span>
              <Button
                size={"lg"}
                className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1e81cd] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
              >
                <span className="bg-clip-text md:text-center font-sans group-hover:from-black group-hover:to-black">
                  Create my Resume
                </span>
              </Button>
            </div>
          }
        />
      </section>
      <InfiniteMovingCards items={clients} direction="right" speed="slow" />
    </main>
  );
}
