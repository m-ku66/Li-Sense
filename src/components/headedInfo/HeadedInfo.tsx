type Props = {
  headerText: string;
  infoText: string;
};

const HeadedInfo = ({ headerText, infoText }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="inter text-neutral-400 font-[300] text-[1rem]">
        {headerText}
      </h1>
      <p className="inter font-[300] text-[1.2rem]">{infoText}</p>
    </div>
  );
};

export default HeadedInfo;
