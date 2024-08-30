import { Image } from "@nextui-org/react";

const ID = () => {
  return (
    <div className="w-full h-full relative flex justify-center rounded-md">
      <Image
        src="/id/bg.png"
        alt=""
        className="fadeIn3 w-full h-full object-cover rounded-md"
      />
      <div className="fadeIn2 rounded-s-md z-10 absolute bottom-0 left-0 w-[30%] h-full bg-[#F59E0B]/[0.5] flex flex-col items-center gap-8">
        <Image
          src="/id/ca.png"
          alt=""
          className="slideUp2 w-[90%] h-[90%] object-contain ml-1 mt-2"
        />
        <Image
          src="/id/CALIFORNIA.png"
          alt=""
          className="blink w-[130%] h-[130%]"
        />
      </div>
      <img
        src="/id/jane.png"
        alt=""
        className="fadeIn1 absolute z-10 w-full h-full object-cover rounded-b-md"
      />
      <div className="fadeIn3 text-white bg-gradient-to-r from-[#F59E0B] z-20 absolute bottom-0 left-0 flex flex-col gap-0 w-[50%] h-fit p-4 rounded-bl-md">
        <h1 className="text-nowrap inter text-[0.9rem] font-[200] tracking-widest">
          Identification Card
        </h1>
        <p className="inter text-[2rem] font-[400]">Jane Doe</p>
      </div>
    </div>
  );
};

export default ID;
