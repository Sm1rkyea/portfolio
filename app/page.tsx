import Influence from "@/components/cards/Influence";
import MarqueeLang from "@/components/cards/MarqueeLang";
import MarqueeTech from "@/components/cards/MarqueeTech";
import Project from "@/components/cards/Project";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="relative bg-center md:bg-cover bg-no-repeat bg-[url(/images/bg.png)]">
        <div className="min-h-screen text-white flex flex-col pt-42 max-lg:text-center lg:pt-62 w-[90vw] lg:w-[92.5vw] mx-auto">
          <h1 className="text-[3.5rem] font-semibold sm:text-[5rem] lg:text-[4.5rem]">Zdravím, jsem <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8CCBFF] to-[#ABD9FF]">Smirkyea</span></h1>
          
          <p className="text-[18px] lg:-mt-2 lg:max-w-[70vw]">
            I’m a young and passionate programmer from the Czech Republic, perhaps like many others, who has already had the opportunity to be part of something significant — contributing to the development of two of the largest Minecraft servers on the Czech and Slovak scene: QPlay.cz and Survival-Games.cz. These experiences taught me not only about programming, but also about teamwork, infrastructure, and building something that thousands of players enjoy every day. My biggest ambition for the future is to become a professional Software Developer at JetBrains.
          </p>
        </div>

        <div className="absolute xl:flex items-center justify-center bottom-[28px] space-x-6 left-1/2 -translate-x-1/2 w-[90vw] lg:min-w-[92.5vw]">
          <div className="px-4 py-3 bg-[#525252]/10 flex space-x-3 items-center min-w-fit rounded-[10px] max-xl:hidden">
            <Image src='/icons/clock.svg' alt='Clock' width={86} height={86} />

            <div>
              <h1 className="text-white text-[24px] font-semibold">6+ měsíců</h1>
              <p className="text-white text-[18px] max-w-[20vh]">zkušeností s Website Developmentem.</p>
            </div>
          </div>

          <div className="flex-1 space-y-2 ml-4 lg:ml-1.5">
            <MarqueeLang />
            <MarqueeTech />
          </div>

          <div className="px-4 py-3 bg-[#525252]/10 flex space-x-3 items-center min-w-fit rounded-[10px] max-xl:hidden">
            <Image src='/icons/clock.svg' alt='Clock' width={86} height={86} />

            <div>
              <h1 className="text-white text-[24px] font-semibold"><Link href="https://www.freecodecamp.org/certification/Sm1rkyea/responsive-web-design" target="_blank" className="transition-colors duration-200 hover:text-lblue-300">1+ certifikátů</Link></h1>
              <p className="text-white text-[18px] max-w-[20vh]">ohledně Website Developmentu.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center pt-14 pb-12 bg-black">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-[2.25rem] text-white">Mé projekty</h1>
        </div>

        <div className="pt-8 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6 w-[90vw] lg:w-[92.5vw] mx-auto">
          <Project />
        </div>
      </section>

      <section className="text-center pt-14 pb-12 bg-[#020202]">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-[2.25rem] text-white">Mé působení</h1>
        </div>

        <div className="pt-8 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6 w-[90vw] lg:w-[92.5vw] mx-auto">
          <Influence />
        </div>
      </section>
    </>
  );
}
