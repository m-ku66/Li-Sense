import { Card } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { DotIcon } from "lucide-react";

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
        state: "NY",
        zip: "10001",
        gender: "Female",
        height: { en: [5, 11], cm: 180 },
        weight: { en: 120, kg: 54 },
        eyeColor: "Blue",
        issueDate: "01/01/2021",
        expDate: "01/01/2025",
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
        state: "NY",
        zip: "10001",
        gender: "Female",
        height: { en: [5, 11], cm: 180 },
        weight: { en: 120, kg: 54 },
        eyeColor: "Blue",
        issueDate: "01/01/2000",
        expDate: "01/01/2005",
      },
    ]);
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center flex-col gap-1">
      <div className="flex overflow-x-scroll w-[100vw] h-fit py-2">
        <div className="w-fit h-fit flex gap-6 items-center flex-nowrap py-2 px-6">
          {docs.map((doc) => (
            <Card key={doc.key} className="flex gap-2 p-5 w-[350px] h-[225px]">
              <h1>{doc.docType}</h1>
              <h1>{doc.expDate}</h1>
            </Card>
          ))}
        </div>
      </div>
      <div className="flex gap-1">
        {docs.map((doc) => (
          <DotIcon key={doc.key} size={48} />
        ))}
      </div>
    </div>
  );
};

export default DocumentDeck;
