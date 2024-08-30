import { Button, Image, CircularProgress } from "@nextui-org/react";
import { useState } from "react";
import { CheckCircleIcon, XCircleIcon } from "lucide-react";

type Props = {
  setAppState: React.Dispatch<React.SetStateAction<string>>;
};
const ScanScreen = ({ setAppState }: Props) => {
  const [pageState, setPageState] = useState("hint");

  function pageRenderer(state: string) {
    switch (state) {
      case "hint":
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
              Ensure that the document fits within the borders of your phone
              camera, and that your lighting isn’t too dim
            </p>
            <div className="fadeIn4 flex flex-col items-center gap-6 w-full">
              <Button
                onClick={() => setPageState("scan")}
                className="w-[80%] bg-black text-white"
              >
                Proceed
              </Button>
              <Button
                onClick={() => setAppState("main_app")}
                className="w-[80%] bg-black text-white"
              >
                Cancel
              </Button>
            </div>
          </div>
        );
      case "scan":
        return (
          <div
            onClick={() => setPageState("verification")}
            className="fadeIn1 flex flex-col items-center justify-center w-full h-full gap-8"
          >
            <h1 className="fadeIn2 inter text-[1.3rem] font-[500]">
              Tap this screen to continue
            </h1>
          </div>
        );
      case "verification":
        return (
          <div className="fadeIn1 flex flex-col items-center justify-center w-full h-full gap-52">
            <h1
              onClick={() => setPageState("verified")}
              className="blink inter text-[1.3rem] font-[500]"
            >
              Validating...
            </h1>
            <CircularProgress color="default" aria-label="Loading" size="lg" />
            <p
              onClick={() => setPageState("failed")}
              className="fadeIn3 inter text-neutral-400 text-center w-[80%]"
            >
              This process may take a few moments to complete...
            </p>
          </div>
        );
      case "verified":
        return (
          <div
            onClick={() => setAppState("main_app")}
            className="slideUp1 flex flex-col items-center justify-center w-full h-full gap-52"
          >
            <h1 className="inter text-[1.3rem] font-[500]">Verified!</h1>
            <CheckCircleIcon size={32} />
            <p className="fadeIn3 inter text-neutral-400 text-center w-[80%]">
              You're good to go!
            </p>
          </div>
        );
      case "failed":
        return (
          <div
            onClick={() => setPageState("hint")}
            className="slideUp1 flex flex-col items-center justify-center w-full h-full gap-52"
          >
            <h1 className="inter text-[1.3rem] font-[500]">
              Verification Failed
            </h1>
            <XCircleIcon size={32} />
            <p className="fadeIn3 inter text-neutral-400 text-center w-[80%]">
              Something went wrong please try again
            </p>
          </div>
        );
      default:
        return;
    }
  }
  return pageRenderer(pageState);
};

export default ScanScreen;
