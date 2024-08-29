import { Button, Image } from "@nextui-org/react";

type Props = {
  setAppState: React.Dispatch<React.SetStateAction<string>>;
};
const ScanScreen = ({ setAppState }: Props) => {
  return (
    <div className="fadeIn1 flex flex-col items-center justify-center w-full h-full gap-8">
      <h1 className="fadeIn2 inter text-[1.3rem] font-[500]">
        Scanning Documents
      </h1>
      <Image
        src="/scan_demo.png"
        alt="scanner"
        className="blink w-full h-full rounded-none"
      />
      <p className="fadeIn3 inter text-neutral-400 text-center w-[80%]">
        Ensure that the document fits within the borders of your phone camera,
        and that your lighting isn’t too dim
      </p>
      <div className="fadeIn4 flex flex-col items-center gap-6 w-full">
        <Button className="w-[80%] bg-black text-white">Proceed</Button>
        <Button
          onClick={() => setAppState("main_app")}
          className="w-[80%] bg-black text-white"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default ScanScreen;
