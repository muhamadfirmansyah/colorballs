import { DotsHorizontalIcon } from "@heroicons/react/outline"

const Header = () => {
    return (
        <header>
            <div className="grid grid-cols-3 items-center py-3 px-4">
                <div className='flex justify-start'>
                    <DotsHorizontalIcon className='w-8 text-gray-400' />
                </div>
                <div className='flex justify-center'>
                    <h6 className='font-bold'>Plantr</h6>
                </div>
                <div className='flex justify-end'>
                    <div className='w-10 h-10 rounded-full bg-blue-100 text-blue-400 font-bold flex items-center justify-center'>
                        P
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header