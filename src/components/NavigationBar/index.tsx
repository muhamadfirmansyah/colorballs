import { BellIcon, FolderIcon, SearchIcon } from "@heroicons/react/outline"

const NavigationBar = () => {
    return (
        <nav className='fixed bottom-0 bg-gray-100 shadow-lg drop-shadow-lg py-3 block w-full left-0'>
            <ul className='grid grid-cols-3 gap-4'>
                <li>
                    <a className='flex align-items-center flex-wrap justify-center text-center text-blue-500' href="/">
                        <FolderIcon className='w-7' />
                        <span className="text-[12px] w-full mt-[2px]">
                            Saved
                        </span>
                    </a>
                </li>
                <li>
                    <a className='flex align-items-center flex-wrap justify-center text-center  text-blue-700 font-bold' href="/">
                        <SearchIcon className='w-7' />
                        <span className="text-[12px] w-full mt-[2px]">
                            Explore
                        </span>
                    </a>
                </li>
                <li>
                    <a className='flex align-items-center flex-wrap justify-center text-center  text-blue-500' href="/">
                        <BellIcon className='w-7' />
                        <span className="text-[12px] w-full mt-[2px]">
                            Notification
                        </span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default NavigationBar