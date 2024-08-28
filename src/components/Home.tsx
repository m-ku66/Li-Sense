import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
} from "@nextui-org/react";
import DocumentDeck from "./documentDeck/DocumentDeck";
import { useState, useEffect } from "react";
import { SmartphoneNfcIcon } from "lucide-react";

const Home = () => {
  const [recentUses, setrecentUses] = useState<any[]>([]);
  const [textAnimState, settextAnimState] = useState<"still" | "animating">(
    "still"
  );

  useEffect(() => {
    setrecentUses([
      {
        date: "02/10/2020",
        time: "17:30:01",
        location: "123 Main St, New York, NY",
        name: "Whimsical Bar",
        docScanned: "ID",
        scanReceipt: "1234567890",
        note: "Age verification failed",
        thumbnail: "/whimsical_bar.png",
      },
      {
        date: "01/01/2021",
        time: "00:15:01",
        location: "54 Main St, Baltimore, MD",
        name: "Johnny's Liquor Store",
        docScanned: "ID",
        scanReceipt: "1434560090",
        note: "Age verification successful",
        thumbnail: "/johnny_bar.png",
      },
      {
        date: "01/01/2021",
        time: "00:30:01",
        location: "54 Main St, Baltimore, MD",
        name: "Johnny's Liquor Store",
        docScanned: "ID",
        scanReceipt: "1434561190",
        note: "Age verification successful",
        thumbnail: "/johnny_bar.png",
      },
      {
        date: "03/13/2021",
        time: "14:08:00",
        location: "68 Main St, New York, NY",
        name: "The Dolphin",
        docScanned: "ID",
        scanReceipt: "1224560090",
        note: "Identity verification successful",
        thumbnail: "/the_dolphin.png",
      },
    ]);
  }, []);

  const handleScroll = () => {
    settextAnimState("animating");
    setTimeout(() => {
      settextAnimState("still");
    }, 500); // Reset state after animation completes
  };

  return (
    <div className="relative mt-32 flex flex-col gap-10 items-center justify-center">
      <div className="z-[15] bg-white rounded-md fixed bottom-8 right-5 p-4 inter text-[1.1rem] font-[400] shadow-lg">
        + Scan Document
      </div>
      <div className="flex flex-col gap-4 items-center justify-center">
        <div className="p-4 outline outline-1 outline-neutral-300 flex justify-center items-center">
          <Image
            src="/barcode.png"
            alt="scanner"
            width={88}
            height={55}
            style={{ objectFit: "contain", borderRadius: 0 }}
          />
        </div>
        <div
          className={
            textAnimState === "still"
              ? "flex gap-2 text-neutral-400"
              : "expand-text-animation flex gap-2 text-neutral-400"
          }
        >
          <SmartphoneNfcIcon size={16} />
          <p className="inter text-[0.8rem]">Place phone under scanner</p>
        </div>
        <div className="fadeIn2">
          <DocumentDeck onScroll={handleScroll} />
        </div>

        <div className="flex w-full h-fit px-10">
          <h1 className="inter text-[1rem] font-[500]">Recent</h1>
        </div>
        <div className="overflow-y-scroll w-full h-[70vw]">
          <div className="fadeIn3 flex flex-col w-full h-fit px-10">
            <div className="flex flex-col gap-6 items-center pb-32">
              {recentUses.map((use) => (
                <div
                  key={use.scanReceipt}
                  className="flex flex-col gap-1 w-full h-fit"
                >
                  <Card className="max-w-[400px]">
                    <CardHeader className="flex gap-3">
                      <Image
                        alt="nextui logo"
                        height={40}
                        radius="sm"
                        src={use.thumbnail}
                        width={40}
                      />
                      <div className="flex flex-col">
                        <p className="text-md">{use.name}</p>
                        <p className="text-small text-default-500">
                          {use.date} | {use.time}
                        </p>
                      </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                      <p>{use.note ? use.note : "No additional notes"}</p>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                      <p className="text-small text-default-500">
                        Scan Receipt: {use.scanReceipt}
                      </p>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
