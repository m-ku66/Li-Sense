import { Card, Image } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { DotIcon, CarIcon, IdCardIcon } from "lucide-react";

const DocumentDeck = () => {
  const [docs, setDocs] = useState<any[]>([]);

  useEffect(() => {
    setDocs([
      {
        key: "12131313131",
        docType: "ID",
        IDNum: "100386759",
        name: "Jane Doe",
        dob: "01/01/2000",
        address: "123 Main St, New York, NY",
        state: "CA",
        zip: "10001",
        gender: "Female",
        height: { en: [5, 11], cm: 180 },
        weight: { en: 120, kg: 54 },
        eyeColor: "Blue",
        issueDate: "01/01/2021",
        expDate: "01/01/2025",
        thumbnail: "/whimsical_bar.png",
      },
      {
        key: "10001214131",
        docType: "Driver's License",
        IDNum: "13345729",
        DDNum: "12225354664838929",
        class: "C",
        name: "Jane Doe",
        dob: "01/01/2000",
        address: "123 Main St, New York, NY",
        state: "NY",
        zip: "10001",
        gender: "Female",
        height: { en: [5, 11], cm: 180 },
        weight: { en: 120, kg: 54 },
        eyeColor: "Blue",
        issueDate: "01/05/2021",
        expDate: "01/05/2025",
        thumbnail: "/whimsical_bar.png",
      },
      {
        key: "12131313000",
        docType: "Driver's License",
        IDNum: "13345729",
        DDNum: "12225354664838929",
        class: "C",
        name: "Jane Doe",
        dob: "01/01/2000",
        address: "123 Main St, New York, NY",
        state: "NJ",
        zip: "10001",
        gender: "Female",
        height: { en: [5, 11], cm: 180 },
        weight: { en: 120, kg: 54 },
        eyeColor: "Blue",
        issueDate: "01/01/2000",
        expDate: "01/01/2005",
        thumbnail: "/whimsical_bar.png",
      },
    ]);
  }, []);

  function bgColorPicker(state: string) {
    switch (state) {
      case "NY":
        return "#33adff";
      case "NJ":
        return "#e18223";
      case "CA":
        return "#F59E0B";
      default:
        return "#6B7280"; // Gray-500
    }
  }

  return (
    <div className="w-full h-full flex justify-center items-center flex-col gap-1">
      <div className="flex overflow-x-scroll w-[100vw] h-fit py-2">
        <div className="w-fit h-fit flex gap-6 items-center flex-nowrap py-2 px-6">
          {docs.map((doc) => (
            <Card
              key={doc.key}
              className={`relative flex gap-2 px-5 py-2 w-[350px] h-[225px] bg-neutral-800`}
              style={{ color: bgColorPicker(doc.state) }}
            >
              <div className="flex items-center gap-2 w-full">
                <div className="flex">
                  {doc.docType === "ID" ? (
                    <IdCardIcon size={24} />
                  ) : (
                    <CarIcon size={24} />
                  )}
                </div>

                <p className="inter text-[0.7rem]">
                  {doc.docType === "ID"
                    ? "Identification Card"
                    : "Driver's License"}
                </p>
              </div>
              <div className="absolute bottom-5 left-5 flex items-center flex-col gap-0">
                <h1 className="inter text-[2rem] font-[500]">{doc.state}</h1>
                <p className="inter text-[0.7rem]">{doc.expDate}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <div className="flex gap-1">
        {docs.map((doc) => (
          <DotIcon key={doc.key} size={32} />
        ))}
      </div>
    </div>
  );
};

export default DocumentDeck;
