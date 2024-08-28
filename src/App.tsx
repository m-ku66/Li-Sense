import { useState, useEffect } from "react";
import OpeningScreen from "./components/OpeningScreen";
import AuthScreen from "./components/AuthScreen";
import Home from "./components/Home";
import ScanScreen from "./components/ScanScreen";
import AccountScreen from "./components/AccountScreen";
import Header from "./components/Header";

function App() {
  const [appState, setAppState] = useState("opening_screen");
  const [wasTapped, setWasTapped] = useState(false);

  useEffect(() => {
    setWasTapped(false);
  }, [appState]);

  function appRenderer(state: string) {
    switch (state) {
      case "opening_screen":
        return (
          <div
            className="flex w-full h-full justify-center items-center"
            onClick={handleOpeningScreenTap}
          >
            <OpeningScreen wasTapped={wasTapped} />
          </div>
        );
      case "auth":
        return <AuthScreen setAppState={setAppState} />;
      case "main_app":
        return <Home setAppState={setAppState} />;
      case "scan_doc":
        return <ScanScreen setAppState={setAppState} />;
      case "account_security":
        return <AccountScreen />;
      default:
        return <OpeningScreen wasTapped={wasTapped} />;
    }
  }

  function headerRenderer(state: string) {
    switch (state) {
      case "opening_screen":
      case "auth":
      case "scan_doc":
        return null;
      case "main_app":
      case "account_security":
        return <Header appState={appState} setAppState={setAppState} />;
      default:
        return null;
    }
  }

  function handleOpeningScreenTap() {
    setWasTapped(true);
    setTimeout(() => {
      setAppState("auth");
    }, 1600);
  }

  return (
    <>
      <div className="relative flex flex-col container max-w-full h-screen overflow-x-hidden overflow-y-scroll md:hidden">
        {headerRenderer(appState)}
        <div className="fadeIn3 flex w-full h-full justify-center items-center">
          {appRenderer(appState)}
        </div>
      </div>
      {/* // */}
      <div className="hidden md:flex container max-w-full h-screen justify-center items-center">
        Please switch to a mobile device in order to view the application demo.
      </div>
    </>
  );
}

export default App;
