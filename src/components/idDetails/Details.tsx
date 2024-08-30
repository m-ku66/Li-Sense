import { Divider } from "@nextui-org/react";
import HeadedInfo from "../headedInfo/HeadedInfo";

const Details = () => {
  return (
    <div className="w-full h-fit flex flex-col justify-center items-center px-5 overflow-y-scroll">
      <div className="fadeIn1 flex flex-col w-full h-fit gap-4 py-5">
        <div className="fadeIn2 flex items-center gap-2">
          <div className="flex flex-col">
            <div className="flex gap-8">
              <HeadedInfo headerText="First Name" infoText="Jane" />
              <HeadedInfo headerText="Last Name" infoText="Doe" />
            </div>
          </div>
        </div>
        <Divider />
        <div className="fadeIn3 flex flex-col gap-10">
          <div className="flex">
            <HeadedInfo
              headerText="Address"
              infoText="1325 FakeName Drive, MD"
            />
          </div>
          <div className="flex gap-8">
            <HeadedInfo headerText="Country" infoText="United States" />
            <HeadedInfo headerText="City" infoText="Baltimore" />
            <HeadedInfo headerText="ZIP" infoText="21215" />
          </div>
        </div>
        <Divider className="mb-6" />
        <div className="fadeIn4 flex flex-col gap-10">
          <div className="flex gap-8">
            <HeadedInfo headerText="Sex" infoText="Female" />
            <HeadedInfo headerText="Eye Color" infoText="Brown" />
            <HeadedInfo headerText="Height" infoText="180cm" />
          </div>
          <div className="flex gap-8">
            <HeadedInfo headerText="Weight" infoText="54kg" />
            <HeadedInfo headerText="DOB" infoText="01/25/1999" />
          </div>
        </div>
        <Divider className="mb-6" />
        <div className="fadeIn5 flex mb-6">
          <HeadedInfo headerText="Date Issued" infoText="01/01/2021" />
        </div>
      </div>
    </div>
  );
};

export default Details;
