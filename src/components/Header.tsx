import { Image } from "@nextui-org/react";
import { useState, useEffect, useMemo, useCallback } from "react";
import {
  BookLockIcon,
  ShieldPlusIcon,
  HardDriveUploadIcon,
  HardDriveDownloadIcon,
  LanguagesIcon,
  LogOutIcon,
} from "lucide-react";

type Props = {
  appState: string;
  setAppState: React.Dispatch<React.SetStateAction<string>>;
};

const Header = ({ appState, setAppState }: Props) => {
  const [menuState, setMenuState] = useState<"closed" | "open" | "closing">(
    "closed"
  );
  const [closeBtnVisible, setCloseBtnVisible] = useState(false);

  // Memoize the header text to prevent unnecessary recalculations
  const headerText = useMemo(() => {
    switch (appState) {
      case "main_app":
        return "Documents";
      case "account_security":
        return "Account & Security";
      default:
        return null;
    }
  }, [appState]);

  // Update close button visibility
  useEffect(() => {
    if (menuState === "open") {
      const timeout = setTimeout(() => setCloseBtnVisible(true), 500);
      return () => clearTimeout(timeout);
    } else {
      setCloseBtnVisible(false);
    }
  }, [menuState]);

  // Handle menu toggle with useCallback to prevent unnecessary re-creations
  const toggleMenu = useCallback(() => {
    setMenuState("open");
  }, []);

  const closeMenu = useCallback(() => {
    setMenuState("closing");
    setTimeout(() => {
      setMenuState("closed");
    }, 500);
  }, []);

  return (
    <>
      <div className="z-10 absolute w-full h-10 bg-white top-0 left-0 flex items-center justify-between px-6 py-8 shadow-md">
        <div className="flex items-center gap-2">
          <Image
            onClick={() => setAppState("main_app")}
            src="/logo1.png"
            alt="Lisense Logo"
            width={24}
            height={24}
            style={{ objectFit: "contain", borderRadius: "0rem" }}
          />
          {headerText && (
            <h1 className="inter text-[1.5rem] font-[600]">{headerText}</h1>
          )}
        </div>
        <Image
          onClick={toggleMenu}
          src="/menu.png"
          alt="menu"
          width={24}
          height={24}
          style={{ objectFit: "contain", borderRadius: "0rem" }}
        />
      </div>

      {/* Menu & Overlay */}
      {menuState !== "closed" && (
        <>
          <div
            className={
              menuState === "open"
                ? "overlayFadeIn absolute top-0 left-0 z-[11] w-full h-full bg-black/[0.8]"
                : "overlayFadeOut absolute top-0 left-0 z-[11] w-full h-full bg-black/[0.8]"
            }
          ></div>
          <div
            className={
              menuState === "open"
                ? "menuSlide absolute top-0 right-0 z-20 flex flex-col gap-10 w-[80%] h-full bg-white px-6 py-5"
                : "menuClose absolute top-0 right-0 z-20 flex flex-col gap-10 w-[80%] h-full bg-white px-6 py-5"
            }
          >
            <div className="w-full h-fit flex justify-end">
              {closeBtnVisible ? (
                <Image
                  onClick={closeMenu}
                  src="/close.png"
                  alt="close"
                  width={24}
                  height={24}
                  style={{ objectFit: "contain", borderRadius: "0rem" }}
                />
              ) : (
                <Image
                  onClick={closeMenu}
                  src="/close.png"
                  alt="close"
                  width={24}
                  height={24}
                  style={{
                    objectFit: "contain",
                    borderRadius: "0rem",
                    opacity: 0,
                  }}
                />
              )}
            </div>
            <div className="flex flex-col gap-10 mt-10 mx-4">
              <div className="flex items-center gap-4">
                <BookLockIcon size={32} />
                <h1 className="inter text-[1.2rem] font-[300]">
                  Privacy Policy
                </h1>
              </div>
              <div className="flex items-center gap-4">
                <ShieldPlusIcon size={32} />
                <h1 className="inter text-[1.2rem] font-[300]">
                  Account & Security
                </h1>
              </div>
              <div className="flex items-center gap-4">
                <HardDriveUploadIcon size={32} />
                <h1 className="inter text-[1.2rem] font-[300]">Backup Data</h1>
              </div>
              <div className="flex items-center gap-4">
                <HardDriveDownloadIcon size={32} />
                <h1 className="inter text-[1.2rem] font-[300]">
                  Offline Access
                </h1>
              </div>
              <div className="flex items-center gap-4">
                <LanguagesIcon size={32} />
                <h1 className="inter text-[1.2rem] font-[300]">Language</h1>
              </div>
              <div
                onClick={() => setAppState("opening_screen")}
                className="flex items-center gap-4"
              >
                <LogOutIcon size={32} />
                <h1 className="inter text-[1.2rem] font-[300]">Logout</h1>
              </div>
            </div>
            <p className="absolute bottom-5 right-5 inter text-neutral-400 text-[0.7rem] font-[300]">
              v0.0.1 Marc Miango Li-Sense© 2024{" "}
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
