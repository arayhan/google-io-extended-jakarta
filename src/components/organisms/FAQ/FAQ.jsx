import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { DATA_FAQ } from "@data";

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState([]);

  const handleClickItem = (index) => {
    if (!activeIndex.includes(index)) activeIndex.push(index);
    else activeIndex.splice(activeIndex.indexOf(index), 1);

    setActiveIndex([...activeIndex]);
  };

  return (
    <div>
      {DATA_FAQ.map((faq, index) => (
        <div
          key={faq.question}
          className="max-w-screen-md w-full border-b"
        >
          <button
            className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 border-2 border-transparent hover:border-gray-800 rounded-lg"
            onClick={() => handleClickItem(index)}
          >
            <div className="w-11/12 text-left text-lg">{faq.question}</div>
            <div>
              <BiChevronDown
                className={`${activeIndex.includes(index) && "transform rotate-180"} transition-all`}
                size={24}
              />
            </div>
          </button>
          {activeIndex.includes(index) && <div className="px-3 py-6">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
};
