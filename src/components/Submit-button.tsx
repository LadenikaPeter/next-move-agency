import { useState } from "react";

type SubmitButtonProps = {
  currentColor?: string;
  activeColor?: string;
  backgroundColor?: string;
};

export default function SubmitButton({
  currentColor = "#054738",
  activeColor = "#ffffff",
  backgroundColor = "#054738",
}: SubmitButtonProps) {
  const [color, setColor] = useState(currentColor);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <button
        style={{
          borderColor: `${backgroundColor}`,
          backgroundColor: `${isHovered ? backgroundColor : "transparent"}`,
          color: `${isHovered ? activeColor : color}`,
        }}
        onMouseEnter={() => {
          setColor(activeColor);
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setColor(currentColor);
          setIsHovered(false);
        }}
        type="submit"
        className={`w-[96px] h-[96px] border border-solid rounded-full`}
      >
        Submit
      </button>
    </div>
  );
}
