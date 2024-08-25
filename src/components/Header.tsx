type Props = {
  setAppState: React.Dispatch<React.SetStateAction<string>>;
};
const Header = ({ setAppState }: Props) => {
  return (
    <div className="absolute" onClick={() => setAppState("main_app")}>
      Header
    </div>
  );
};

export default Header;
