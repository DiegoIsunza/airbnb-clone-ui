/* eslint-disable import/no-extraneous-dependencies */
import Image from 'next/image';
import { SearchIcon, MenuIcon, UserIcon, UserCircleIcon } from '@heroicons/react/solid';
import { GlobeAltIcon } from '@heroicons/react/outline';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-4 md:px-12">
      <div className="relative flex items-center h-8 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="logo"
        />
      </div>

      {/* middle-search */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm hover:shadow-lg">
        <input className=" flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400" type="text" placeholder="Start your search" />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-500 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* right */}
      <div className="flex items-center space-x-3 justify-end text-black">
        <p className="hidden md:inline cursor-pointer font-medium text-sm hover:scale-95 transition duration-100">Become a host</p>
        <div className="flex h-11 w-11 hover:bg-gray-100 rounded-full items-center justify-center">
          <GlobeAltIcon className="h-5 cursor-pointer" />
        </div>
        <div className="flex items-center space-x-2 border-2 rounded-full p-1.5 hover:shadow-md">
          <MenuIcon className="h-5 cursor-pointer" />
          <UserCircleIcon className="h-7 cursor-pointer text-gray-500" />
        </div>
      </div>
    </header>
  );
};

export default Header;
