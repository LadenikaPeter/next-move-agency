import { useState } from "react";

export default function ArrowLink() {
  const [currentColor, setIsCurrentColor] = useState("#ffffff");

  return (
    <>
      <div
        className="border border-white rounded-[50%] hover:bg-white cursor-pointer"
        onMouseEnter={() => {
          setIsCurrentColor("#054738");
        }}
        onMouseLeave={() => {
          setIsCurrentColor("#ffffff");
        }}
      >
        <svg
          className="p-[5px]"
          width="35px"
          height="35px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0" />

          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          />

          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9 6.75C8.58579 6.75 8.25 6.41421 8.25 6C8.25 5.58579 8.58579 5.25 9 5.25H18C18.4142 5.25 18.75 5.58579 18.75 6V15C18.75 15.4142 18.4142 15.75 18 15.75C17.5858 15.75 17.25 15.4142 17.25 15V7.81066L6.53033 18.5303C6.23744 18.8232 5.76256 18.8232 5.46967 18.5303C5.17678 18.2374 5.17678 17.7626 5.46967 17.4697L16.1893 6.75H9Z"
              fill={`${currentColor}`}
            />{" "}
          </g>
        </svg>
      </div>
    </>
  );
}
