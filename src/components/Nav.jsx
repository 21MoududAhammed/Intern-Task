import { IoIosArrowDown } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center bg-[#363636] text-white text-base  px-5 md:px-12 shadow h-16">
        <button
          className="block md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <IoMenu />
        </button>

        {/* others  */}
        <div className="hidden md:block">
          {/* pages  */}
          <ul className="flex justify-evenly gap-20">
            <li className="flex items-center gap-2">
              Home <IoIosArrowDown />
            </li>
            <li className="flex items-center gap-2">
              Event <IoIosArrowDown />
            </li>
            <li className="flex items-center gap-2">
              Contact <IoIosArrowDown />
            </li>
            <li className="flex items-center gap-2">
              Blog <IoIosArrowDown />
            </li>
          </ul>
        </div>
        <div>
          <input
            className="border-2 rounded-xl border-gray-500 px-2  "
            type="text"
            placeholder="search"
          />
        </div>
      </div>

      {isOpen && (
        <div className=" md:hidden  flex justify-center items-center font-semiBold">
          <ul className="w-full bg-[#363636] text-white font-semibold text-center py-3">
            <li className="hover:text-yellow-600">Home</li>
            <li className="hover:text-yellow-600">Event</li>
            <li className="hover:text-yellow-600">Contact</li>
            <li className="hover:text-yellow-600">Blog</li>
          </ul>
        </div>
      )}
    </>
  );
}
