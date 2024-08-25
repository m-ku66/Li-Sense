import { Image, Input } from "@nextui-org/react";

type Props = {
  setAppState: React.Dispatch<React.SetStateAction<string>>;
};
const AuthScreen = ({ setAppState }: Props) => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAppState("main_app");
  };

  return (
    <div className="slideUp1 flex justify-center">
      <form
        className="flex flex-col items-center gap-5 w-full"
        onSubmit={onSubmit}
      >
        <h1 className="slideUp2 inter text-[1.5rem] font-[600] text-center">
          Enter your pin
        </h1>
        <div className="slideUp3 w-full mb-5">
          <Input
            type="password"
            maxLength={4}
            fullWidth
            color="default"
            size="lg"
            placeholder="****"
            className="centered-input"
          />
        </div>
        <div className="slideUp4 flex items-center gap-2 pb-10 opacity-30">
          <Image
            src="/fingerprint.png"
            alt="fingerprint"
            width={12}
            height={24.5}
            style={{ opacity: 0.5, objectFit: "contain" }}
          />
          <p className="inter text-[0.9rem] font-[400] opacity-50">
            Fingerprint Login
          </p>
        </div>
      </form>
    </div>
  );
};

export default AuthScreen;
