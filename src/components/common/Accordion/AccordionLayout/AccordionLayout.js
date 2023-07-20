import React, { useState, useRef, useEffect } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const AccordionLayout = ({
  title,
  children,
  index,
  activeIndex,
  setActiveIndex,
}) => {
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    setContentHeight(
      activeIndex === index ? contentRef.current.scrollHeight : 0
    );
  }, [activeIndex, index]);

  const handleSetIndex = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the accordion if it's already open
    } else {
      setActiveIndex(index); // Open the clicked accordion
    }
  };

  return (
    <div className="w-full rounded border border-gray-400">
      <div
        onClick={() => handleSetIndex(index)}
        className="flex cursor-pointer items-center justify-between bg-pink-300 p-2"
      >
        <div className="flex items-center">
          <RiArrowDownSLine
            className={`mr-2 transform text-xl ${
              activeIndex === index ? "rotate-0" : "-rotate-90"
            }`}
          />{" "}
          {/* Arrow pointing down when open, pointing left when closed */}
          <div className="font-bold text-white">{title}</div>
        </div>
      </div>

      <div
        style={{ maxHeight: `${contentHeight}px` }}
        className="transition-max-height overflow-hidden duration-300 ease-in-out"
      >
        <div
          ref={contentRef}
          className="p-4"
          style={{ overflow: "auto" }} // Allow content to scroll if it overflows
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default AccordionLayout;
