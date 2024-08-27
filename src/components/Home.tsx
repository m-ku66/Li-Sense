import { Image } from "@nextui-org/react";
import DocumentDeck from "./documentDeck/DocumentDeck";
import { useState, useEffect } from "react";

const Home = () => {
  const [recentUses, setrecentUses] = useState<any[]>([]);

  useEffect(() => {
    setrecentUses([
      {
        date: "02/10/2020",
        time: "17:30:01",
        location: "123 Main St, New York, NY",
        name: "Whimsical Bar",
        docScanned: "ID",
        scanReceipt: "1234567890",
      },
      {
        date: "01/01/2021",
        time: "00:15:01",
        location: "54 Main St, Baltimore, MD",
        name: "Johnny's Liquor Store",
        docScanned: "ID",
        scanReceipt: "1434560090",
      },
    ]);
  }, []);

  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      <div className="flex flex-col gap-4 items-center justify-center">
        <div className="fadeIn1 p-4 outline outline-1 outline-neutral-300 flex justify-center items-center">
          <Image
            src="/barcode.png"
            alt="scanner"
            width={88}
            height={55}
            style={{ objectFit: "contain", borderRadius: 0 }}
          />
        </div>
        <div className="fadeIn2">
          <DocumentDeck />
        </div>

        <div className="flex w-full h-fit px-10">
          <h1>Recent</h1>
        </div>
        <div className="overflow-y-scroll w-full h-[60vw]">
          <div className="fadeIn3 flex flex-col w-full h-fit px-10">
            <div className="flex flex-col gap-6 items-center">
              {recentUses.map((use) => (
                <div
                  key={use.scanReceipt}
                  className="flex flex-col gap-1 w-full h-fit"
                >
                  <h1>{use.date}</h1>
                  <h1>{use.time}</h1>
                  <h1>{use.location}</h1>
                  <h1>{use.name}</h1>
                  <h1>{use.docScanned}</h1>
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
