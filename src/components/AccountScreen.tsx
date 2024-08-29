import { Divider, Button } from "@nextui-org/react";
import HeadedInfo from "./headedInfo/HeadedInfo";

const AccountScreen = () => {
  return (
    <div className="w-full h-fit flex flex-col justify-center items-center py-32 px-10 overflow-y-scroll">
      {/* ACCOUNT INFO */}
      <div className="w-full h-52"></div>
      <div className="fadeIn1 flex flex-col gap-1 w-full h-fit mt-32 pt-32">
        <h1 className="inter text-[1.3rem]">Account Information</h1>
        <Divider />
      </div>
      <div className="flex flex-col w-full h-fit gap-4 py-5">
        <div className="fadeIn2 flex items-center gap-2">
          <div className="w-20 h-20 rounded-full bg-neutral-400">
            <img
              src="/jane_doe.jpg"
              alt="user"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <div className="flex flex-col">
            <h1 className="inter text-[1.3rem]">Jane Doe</h1>
            <p className="inter text-neutral-400 font-[200]">UID#11223344556</p>
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
          <HeadedInfo headerText="UI Theme" infoText={`Default`} />
        </div>
        <Button className="fadeIn5 bg-black text-white">
          <p className="inter font-[300] text-[1rem]">Edit</p>
        </Button>
      </div>
      {/* SECURTIY INFO */}
      <div className="fadeIn1 flex flex-col gap-1 w-full h-fit mt-20">
        <h1 className="inter text-[1.3rem]">Security</h1>
        <Divider />
      </div>
      <div className="flex w-full flex-col gap-10 mt-8">
        <div className="flex">
          <HeadedInfo headerText="Login Pin Number" infoText="****" />
        </div>
        <h1 className="inter text-[1.1rem] font-[500]">
          Rescan Fingerprint Login
        </h1>
        <h1 className="inter text-[1.1rem] font-[500]">App Permisions</h1>
      </div>
    </div>
  );
};

export default AccountScreen;
