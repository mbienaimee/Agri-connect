import { AiOutlineMessage } from "react-icons/ai";
import { FaSearch, FaRegBell } from "react-icons/fa";
import { Popover, PopoverButton } from "@headlessui/react";
import { Menu, MenuButton } from "@headlessui/react";

const HeaderAdmin = () => {
  const profile = "lolo.png";
  return (
    <div className="bg-white h-16 w-full flex justify-between px-4 border-b border-gray-200">
      <div className="relative">
        <FaSearch
          fontSize={20}
          className="text-gray-400 absolute top-9 -translate-y-1/2 left-5"
        />
        <input
          type="text"
          placeholder="search.."
          className="text-sm focus:outline-none active:outline-none h-10 w-[24em] border border-gray-300 m-4 rounded-md px-7"
        />
      </div>
      <div className="flex items-center gap-2">
        <Popover className="relative flex">
          {({ open }) => (
            <>
              <PopoverButton className="inline-flex items-center rounded-md hover:bg-gray-200 px-3 py-2 text-base font-medium hover:text-opacity-100 focus:outline-none">
                <AiOutlineMessage fontSize={24} />
              </PopoverButton>

              <PopoverButton className="inline-flex items-center rounded-md hover:bg-gray-200 px-3 py-2 text-base font-medium hover:text-opacity-100 focus:outline-none">
                <FaRegBell fontSize={24} />
              </PopoverButton>
            </>
          )}
        </Popover>
        <Menu>
          <MenuButton className="inline-flex w-full justify-center rounded-md ">
            <div className="bg-[url('lolo.png')] w-[50px] h-[50px] bg-cover rounded-full"></div>
          </MenuButton>
        </Menu>
      </div>
    </div>
  );
};

export default HeaderAdmin;
