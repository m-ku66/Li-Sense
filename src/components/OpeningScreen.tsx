import { Image } from "@nextui-org/react";
import ProgressBar from "./progressBar/ProgressBar";

type Props = {
  wasTapped: boolean;
};
const OpeningScreen = ({ wasTapped }: Props) => {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex flex-col items-center">
        <Image
          className="p-5"
          src="/logo1.png"
          alt="Lisense Logo"
          width={242 * 1.2}
          height={174 * 1.2}
        />
        <h1 className="inter text-3xl font-[600] text-center">Li-Sense</h1>
      </div>
      {wasTapped ? (
        <ProgressBar />
      ) : (
        <div className="flex w-[80%] h-2 bg-neutral-300 rounded-md opacity-0"></div>
      )}
    </div>
  );
};

export default OpeningScreen;
