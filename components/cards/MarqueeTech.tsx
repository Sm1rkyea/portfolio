import { marqueeTwoItems } from "@/constants/marquee";
import Image from "next/image";

const MarqueeTech = () => {
  const loopItems = [...marqueeTwoItems, ...marqueeTwoItems];

  return (
    <div className="overflow-hidden w-full xl:max-w-[50vw] 2xl:max-w-[60vw] py-2 px-4 rounded-[12px] bg-gradient-to-r from-[#222222]/30 to-[#525252]/30">
      <div className="marquee-track marquee flex w-max">
        {loopItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-[15px] text-white/95 text-[1.9rem] px-5">
            <Image
              src={item.img}
              alt={item.label}
              draggable={false}
              width={26}
              height={26}
              style={{ userSelect: 'none' }}
            />
            <span className="text-[1.25rem] mt-[2.5px]">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarqueeTech