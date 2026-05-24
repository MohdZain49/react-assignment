import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { IoDiamond } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUser } from "react-icons/fa";

function Navbar() {
  return (
    <div className="w-full flex items-center justify-between px-4 h-17 bg-[#4378FF0D] shadow-sm">
      {/* Search Bar - Left Side */}
      <div className="flex items-center border-[1.5px] border-blue-500 bg-white px-2 rounded-md">
        <input
          type="text"
          placeholder="Find influencers to collaborate with"
          className="py-3 outline-none sm:w-50 md:w-75 lg:w-100 text-sm font-medium"
        />
        <CiSearch className="size-5 mr-2" />
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-4 mx-2">
        <button className="hidden md:flex justify-center items-center bg-yellow-500 text-white px-3 py-2 text-xs font-medium rounded-md hover:bg-yellow-600 cursor-pointer">
          <IoDiamond className="size-3 mr-1 inline" />
          Upgrade
        </button>
        <button className="hidden md:flex justify-center items-center bg-blue-500 text-white px-3 py-2 text-xs font-medium rounded-md hover:bg-blue-600 cursor-pointer">
          <FaPlus className="size-3 mr-1 inline" />
          Create Campaign
        </button>
        <button className="bg-white flex items-center px-2 py-2 gap-1 rounded-full cursor-pointer">
          <FaUser className="size-6 mr-1 inline bg-blue-200 text-blue-500 p-1 rounded-full" />
          <RxHamburgerMenu className="size-5 mr-1 inline" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
