export const ShineButton: React.FC<{
  text: string;
  handleClick: () => void;
}> = ({ text, handleClick }) => {
  return (
    <button
      className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-sky-600 px-4 py-1.5 text-xs font-normal text-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-red-500/30"
      onClick={() => {
        handleClick();
      }}
    >
      <span className=" text-xl">{text}</span>
      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
        <div className="relative h-full w-8 bg-white/20" />
      </div>
    </button>
  );
};
