import Navbar from "@/components/global/navbar";
import { ContainerScroll } from "@/components/global/container-scroll-animation";
import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards";
import { Button } from "@/components/ui/button";
import { clients } from "@/utils/images";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col">
      <section className="w-full rounded-md !overflow-visible relative flex flex-col justiify-center items-center  antialiased">
        <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
          <ContainerScroll
            titleComponent={
              <div className="flex items-center flex-col">
                <Button
                  asChild
                  size={"lg"}
                  className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1e81cd] shadow-2xl shadow-neutral-500 hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
                >
                  <Link href="/resume/builder">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 to-neutral-100  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-black">
                      Create my Resume
                    </span>
                  </Link>
                </Button>
                <h1 className="text-5xl md:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                  Generate your Resume with FindiJobs
                </h1>
                <span className="text-5xl md:text-2xl  bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                  Create Your Professional Resume Easily
                </span>
              </div>
            }
          />
        </div>
      </section>
      <InfiniteMovingCards items={clients} direction="right" speed="slow" />
    </main>
  );
}
