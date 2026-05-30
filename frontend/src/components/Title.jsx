
import React from "react";

const Title = ({ text1, text2, para }) => {
  return (
    <div className="text-center py-10">
      
      {/* Heading */}
      <div className="inline-flex items-center gap-3">
        <p className="text-gray-600 text-3xl md:text-4xl  uppercase">
          {text1}{" "}
          <span className="text-gray-800 font-semibold">
            {text2}
          </span>
        </p>

        {/* Line */}
        <p className="w-12 md:w-20 h-[2px] bg-gray-600"></p>
      </div>

      {/* Paragraph */}
      <p className="max-w-2xl mx-auto mt-4 text-sm md:text-base text-gray-600">
        {para}
      </p>
    </div>
  );
};

export default Title;