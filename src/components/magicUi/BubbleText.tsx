import { cn } from "@/lib/utils";

interface BubbleTextProps {
  word: string;
  className?: string;
}

const BubbleText: React.FC<BubbleTextProps> = ({ word, className }) => {
  return (
    <h2 className={cn("text-center  font-thin ", className)}>
      {word.split("").map((child, idx, arr) => {
        const leftHover =
          idx > 0 ? `hover:text-indigo-100 hover:font-extralight` : "";
        const rightHover =
          idx < arr.length
            ? `hover:text-indigo-100 hover:font-extrabold hover:text-xl transition-all ease-in-out duration-100`
            : "";

        return (
          <span
            className={cn(
              "transition-all duration-350",
              "hover:text-white hover:font-black ",
              leftHover,
              rightHover
            )}
            key={idx}
          >
            {child}
          </span>
        );
      })}
    </h2>
  );
};

export default BubbleText;
