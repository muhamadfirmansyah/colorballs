import { BookmarkIcon, SearchIcon, UserGroupIcon } from "@heroicons/react/outline"
import { ReactElement } from "react"
import { NavLink } from "react-router-dom"

const NavigationBar = () => {

    const linkItems = [
        {
            path: "/saved",
            icon: <BookmarkIcon className="w-6" />,
            title: "Saved"
        },
        {
            path: "/",
            icon: <SearchIcon className="w-6" />,
            title: "Explore"
        },
        {
            path: "/notification",
            icon: <UserGroupIcon className="w-6" />,
            title: "Contact"
        }
    ]

    return (
        <>

            <div className="fixed bottom-[86px] right-[20px]">
                <NavLink to="/content" className="border w-[60px] h-[60px] rounded-full text-[32px] flex items-center justify-center text-blue-500 bg-white">&#43;</NavLink>
            </div>

            <nav className='fixed bottom-0 bg-gray-100 shadow-lg drop-shadow-lg py-3 block w-full left-0'>
                <ul className='grid grid-cols-3 gap-4'>
                    {linkItems.map((item: { path: string, icon: ReactElement, title: string }, index: number) => (
                        <li key={index}>
                            <NavLink className={({ isActive }) => `flex align-items-center flex-wrap justify-center text-center ${isActive ? 'font-bold text-blue-700' : 'font-normal text-blue-500'}`} to={item.path}>
                                { item.icon }
                                <span className="text-[12px] w-full mt-[2px]">
                                    {item.title}
                                </span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default NavigationBar